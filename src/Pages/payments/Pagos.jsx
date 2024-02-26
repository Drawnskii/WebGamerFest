import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { db } from "../../firebase";
import { doc, collection, addDoc, getDocs } from "firebase/firestore";

/* Componentes */
import { AuthContext } from "../../context/AuthContext"; // Contexto de autenticación
import { useContext } from "react";

function Pagos({ onClose, competencia }) {
  // Obtener el estado de autenticación del contexto
  const { currentUser } = useContext(AuthContext);

  const stripe = useStripe();
  const elements = useElements(); // Captura los componentes de Stripe

  // Determinar el precio basado en si el juego es individual o en equipo
  const precio = competencia.esEquipo ? 5 : 3;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se crea el método de pago
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      e.preventDefault();

      console.log(paymentMethod);

      // Pasar los datos de la compra a Firebase
      try {
        // Referencia al documento de la competencia en Firestore
        const competenciaRef = doc(db, "competencias", competencia.id);

        // Crear una referencia a la subcolección "inscripciones" dentro del documento de competencia
        const inscripcionesCollectionRef = collection(
          competenciaRef,
          "inscripciones"
        );

        // Consultar el número de registros existentes en la subcolección de inscripciones
        const inscripcionesSnapshot = await getDocs(inscripcionesCollectionRef);
        const numInscripciones = inscripcionesSnapshot.size;

        if (numInscripciones >= competencia.cupoMaximo) {
          // Se alcanzó el límite de cupos permitidos
          alert(
            "Se ha alcanzado el límite de inscripciones para esta competencia."
          );
        } else {
          // Verificar si el usuario ya está inscrito en la competencia
          const usuarioInscrito = inscripcionesSnapshot.docs.some(
            (doc) => doc.data().userEmail === currentUser.email
          );

          if (usuarioInscrito) {
            // El usuario ya está inscrito
            alert("El usuario ya está inscrito en esta competencia.");
          } else {
            // Agregar un nuevo documento con los detalles de la inscripción y la fecha de compra
            const fechaCompra = new Date(); // Fecha y hora actuales
            await addDoc(inscripcionesCollectionRef, {
              userEmail: currentUser.email,
              paymentMethodId: paymentMethod.id,
              precioPagado: precio,
              fechaCompra: fechaCompra.toISOString(), // Guarda la fecha como una cadena ISO
            });

            alert("Inscripción realizada exitosamente");
          }
        }
      } catch (error) {
        console.error("Error al agregar la inscripción a Firestore:", error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-opacity-50 bg-gray-900">
      <div className="relative w-full max-w-xl mx-auto">
        <div>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h3 className="text-lg font-semibold text-center">
              Pagar Inscripcion
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black text-lg leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black h-6 w-6 text-lg block outline-none focus:outline-none">
                ×
              </span>
            </button>
            {/* Agregar la imagen del producto */}
            <img
              src={competencia.imagenJuego}
              alt={competencia.selectedJuego}
              className="mx-auto mb-4 w-64 h-32 rounded-md"
            />

            {/* Mostrar el nombre del juego */}
            <h2 className="text-center font-bold text-xl mb-4">
              Competencia de {competencia.nombre}
            </h2>

            {/* Mostrar el precio */}
            <p className="text-center mb-4">Precio: ${precio}</p>

            {/* Envolver el formulario con Elements para proporcionar el contexto de Stripe */}
            <CardElement className="border p-2 mb-4" />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Comprar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pagos;
