import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function SelectorColecciones({ label, coleccion, onChange }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const cargarLista = async () => {
      try {
        let listaDefault = [
          { id: 1, nombre: "provincias" },
          { id: 2, nombre: "instituciones" },
          { id: 3, nombre: "usuarios" },
          { id: 4, nombre: "juegos" },
          { id: 5, nombre: "patrocinadores" },
          { id: 6, nombre: "competencias" },
          { id: 7, nombre: "inscripciones" },
        ];

        // Si se proporciona una colección, utiliza los datos de esa colección
        if (coleccion) {
          const coleccionSnapshot = await getDocs(collection(db, coleccion));
          const datosColeccion = coleccionSnapshot.docs.map((doc) => ({
            id: doc.id,
            nombre: doc.data().nombre,
          }));
          setLista(datosColeccion);
        } else {
          setLista(listaDefault);
        }
      } catch (error) {
        console.error(`Error al cargar la colección: ${coleccion}`, error);
      }
    };

    cargarLista();
  }, [coleccion]);

  return (
    <div className="mb-2">
      <label className="text-white">{label}</label>
      <div className="relative">
        <select
          className="w-full outline-none rounded-md pl-2 pr-2 py-2"
          onChange={onChange}
        >
          <option key="seleccione" value="">
            Seleccione...
          </option>
          {lista.map((opcion) => (
            <option key={opcion.id} value={opcion.nombre}>
              {opcion.nombre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectorColecciones;
