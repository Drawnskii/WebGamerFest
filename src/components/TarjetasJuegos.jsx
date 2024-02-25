import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function TarjetasJuegos() {
  // Función que maneja el pago de los productos
  const handlePay = (producto) => {
    console.log(producto);
  };

  const [competencias, setCompetencias] = useState([]);

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
            Aulas: {competencia.aulas}
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
        </div>
      ))}
    </div>
  );
}

export default TarjetasJuegos;
