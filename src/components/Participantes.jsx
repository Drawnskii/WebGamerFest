import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Participantes({ onClose, competencia }) {
  const [inscritos, setInscritos] = useState([]); // Estado para almacenar la lista de inscritos

  useEffect(() => {
    // Función para obtener la lista de inscritos desde Firestore
    const getInscritosFromFirestore = async () => {
      try {
        const inscripcionesRef = collection(
          db,
          "competencias",
          competencia.id,
          "inscripciones"
        );

        const querySnapshot = await getDocs(inscripcionesRef);
        const inscritosData = [];

        querySnapshot.forEach((doc) => {
          inscritosData.push(doc.data());
        });

        setInscritos(inscritosData);
      } catch (error) {
        console.error("Error al obtener la lista de inscritos:", error);
      }
    };

    getInscritosFromFirestore();
  }, [competencia.id]); // Se ejecuta cada vez que cambia el ID de la competencia

  return (
    <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto bg-opacity-50 bg-gray-900">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-center mb-4">
              Participantes
            </h3>
            <button
              className="absolute top-3 right-3 p-1 bg-transparent border-0 text-black text-lg leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black h-6 w-6 block">&#10005;</span>
            </button>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Lista de Inscritos</h3>
              <ul className="list-disc pl-6">
                {inscritos.map((inscrito, index) => (
                  <li key={index} className="text-gray-800">
                    {inscrito.userEmail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participantes;
