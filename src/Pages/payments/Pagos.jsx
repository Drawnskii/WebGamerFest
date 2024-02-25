/* Importación de la librería para ejecutar pagos */
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OnjMYCuEmlmnDrJsYk27Y6HsGXQOQ40WYR09JvRDcZXIpMXHt9WA6SU4tNb7Sf5R0fNfwnrY2VsI1RKnYh3GmSb00jbuSzcH6"
);

function Pagos(producto) {
  const stripe = useStripe();
  const element = useElements(); // Captura los componentes de stripe

  // Determinar el precio basado en si el juego es individual o en equipo
  const precio = producto.esEquipo ? 5 : 3;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se crea el método de pago
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Agregar la imagen del producto */}
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="mx-auto mb-4 w-32 h-32 rounded-full"
        />

        {/* Mostrar el nombre del juego */}
        <h2 className="text-center font-bold text-xl mb-4">
          Competencia de {producto.nombre}
        </h2>

        {/* Mostrar el precio */}
        <p className="text-center mb-4">Precio: ${precio}</p>

        <CardElement className="border p-2 mb-4" />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Comprar
        </button>
      </form>
    </Elements>
  );
}

export default Pagos;
