import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import Pagos from "../Pages/payments/Pagos";
import Participantes from "./Participantes";

// Importación de componentes de react
import useModal from "../forms/useModal";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OnjMYCuEmlmnDrJsYk27Y6HsGXQOQ40WYR09JvRDcZXIpMXHt9WA6SU4tNb7Sf5R0fNfwnrY2VsI1RKnYh3GmSb00jbuSzcH6"
);

function TarjetasJuegos() {
  const {
    showModal: showFormulario,
    openModal: openFormulario,
    closeModal: closeFormulario,
  } = useModal();
  const {
    showModal: showParticipantes,
    openModal: openParticipantes,
    closeModal: closeParticipantes,
  } = useModal();

  const handleParticipantes = (competencia) => {
    console.log(competencia);
    setCompetencia(competencia);
    openParticipantes();
  };

  const handlePay = (competencia) => {
    console.log(competencia);
    setCompetencia(competencia);
    openFormulario();
  };

  const renderParticipantes = () => {
    return (
      <Participantes onClose={closeParticipantes} competencia={competencia} />
    );
  };

  const renderFormulario = () => {
    return <Pagos onClose={closeFormulario} competencia={competencia} />;
  };

  const [competencias, setCompetencias] = useState([]);
  const [competencia, setCompetencia] = useState(null);

  useEffect(() => {
    const fetchCompetencias = async () => {
      try {
        const competenciasSnapshot = await getDocs(
          collection(db, "competencias")
        );
        const competenciasData = competenciasSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompetencias(competenciasData);
      } catch (error) {
        console.error("Error al obtener las competencias:", error);
      }
    };

    fetchCompetencias();
  }, []);

  // Dentro del return del componente FrmCompetencias

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 ml-2">
      {competencias.map((competencia) => (
        <div
          key={competencia.id}
          className="relative bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h2 className="text-lg font-semibold mb-2">
            {competencia.selectedJuego}
          </h2>
          {competencia.imagenJuego && (
            <img
              src={competencia.imagenJuego}
              alt={competencia.selectedJuego}
              className="w-full mb-2 rounded-md"
            />
          )}
          <p className="text-sm text-gray-600 mb-2">
            Hora de inicio: {competencia.horaInicio}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Hora de finalización: {competencia.horaFinal}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Aula: {competencia.aulas}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Cupo máximo: {competencia.cupoMaximo}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Patrocinador: {competencia.selectedPatrocinador}
          </p>
          <div className="flex justify-center">
            {" "}
            <button
              onClick={() => handlePay(competencia)}
              className="btn-inscribirse bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
            >
              Inscribirse
            </button>
          </div>
          <div className="flex justify-center text-black font-semibold hover:underline hover:cursor-pointer transition-all mt-4">
            {" "}
            <span
              onClick={() => handleParticipantes(competencia)}
              className="text-sm"
            >
              Mostrar Participantes
            </span>
          </div>
        </div>
      ))}
      <Elements stripe={stripePromise}>
        {showFormulario && renderFormulario()}
      </Elements>
      {showParticipantes && renderParticipantes()}
    </div>
  );
}

export default TarjetasJuegos;
