import { FaMoneyBillWave } from "react-icons/fa"; // Íconos de react

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

import InscritosChart from "./Inscritos";

function Estadisticas() {
  const [totalRecaudado, setTotalRecaudado] = useState(0);
  const [pagos3, setPagos3] = useState(0);
  const [pagos5, setPagos5] = useState(0);

  useEffect(() => {
    async function obtenerInscripcionesYTotales() {
      const competenciasRef = collection(db, "competencias");
      let total = 0;
      let count3 = 0;
      let count5 = 0;

      try {
        const competenciasSnapshot = await getDocs(competenciasRef);

        competenciasSnapshot.forEach(async (competenciaDoc) => {
          const competenciaId = competenciaDoc.id;
          const inscripcionesRef = collection(
            competenciasRef,
            competenciaId,
            "inscripciones"
          );

          const inscripcionesSnapshot = await getDocs(inscripcionesRef);

          inscripcionesSnapshot.forEach((inscripcionDoc) => {
            const inscripcionData = inscripcionDoc.data();
            console.log(inscripcionData);
            const precioPagado = inscripcionData.precioPagado;

            console.log(precioPagado);

            total += precioPagado;

            console.log(total);

            setTotalRecaudado(total);

            if (precioPagado === 3) {
              count3++;
              setPagos3(count3);
            } else if (precioPagado === 5) {
              count5++;
              setPagos5(count5);
            }
          });
        });
      } catch (error) {
        console.error("Error al obtener las inscripciones:", error);
      }
    }

    obtenerInscripcionesYTotales();
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="max-w-md p-4 bg-light-green shadow-md rounded-md text-center">
        <h2 className="text-lg font-semibold mb-2 text-left">
          Información de la Web
        </h2>
        <div className="mb-4">
          <div className="m-2 w-60 h-60 bg-white rounded-full mx-auto flex flex-col items-center justify-center border-4 border-green-400">
            <p className="text-lg font-bold mb-2">Total Recaudado</p>
            <span className="text-5xl font-bold">${totalRecaudado}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-left">Inscripciones</h3>
        <p className="text-base italic font-semibold mb-2 text-left">
          Individuales: <span className="font-normal not-italic">{pagos3}</span>
        </p>
        <p className="text-base italic font-semibold mb-2 text-left">
          Grupales: <span className="not-italic font-normal">{pagos5}</span>
        </p>
        <FaMoneyBillWave className="text-4xl mx-auto mt-4" />
      </div>
      <div className="ml-4 m-2 p-4 h-[97%] bg-light-green shadow-md rounded-md">
        <InscritosChart />
      </div>
    </div>
  );
}

export default Estadisticas;
