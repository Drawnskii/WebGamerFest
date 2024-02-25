import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function GridPatrocinadores() {
  const [patrocinadores, setPatrocinadores] = useState([]);

  useEffect(() => {
    // Función para obtener los datos de la colección de patrocinadores
    const obtenerPatrocinadores = async () => {
      try {
        const patrocinadoresSnapshot = await getDocs(
          collection(db, "patrocinadores")
        );
        const patrocinadoresData = patrocinadoresSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatrocinadores(patrocinadoresData);
      } catch (error) {
        console.error("Error al obtener patrocinadores:", error);
      }
    };

    obtenerPatrocinadores();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mx-4">
      {patrocinadores.map((patrocinador) => (
        <div
          key={patrocinador.id}
          className="bg-white p-4 shadow-md rounded-lg"
        >
          <h2 className="text-lg font-semibold mb-2">{patrocinador.nombre}</h2>
          <img
            src={patrocinador.logotipo}
            alt={patrocinador.nombre}
            className="w-full mb-2 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-2">
            {patrocinador.descripcion}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Premios: {patrocinador.premios}
          </p>
          {/* Agrega más información si es necesario */}
        </div>
      ))}
    </div>
  );
}

export default GridPatrocinadores;
