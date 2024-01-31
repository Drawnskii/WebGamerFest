import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function SelectorColecciones({ label, coleccion, onChange }) {
  // Estado para almacenar la lista de un coleccion
  const [lista, setLista] = useState([]);

  // Función para cargar las colecciones desde Firestore al montar el componente
  useEffect(() => {
    const cargarLista = async () => {
      try {
        // Obtener una colecion desde Firestore
        const coleccionSnapshot = await getDocs(collection(db, coleccion));
        const datosColeccion = coleccionSnapshot.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.data().nombre,
        }));
        setLista(datosColeccion);
      } catch (error) {
        console.error(`Error al cargar la colección: ${coleccion}`, error);
      }
    };

    cargarLista();
  }, [coleccion]); // Agrega coleccion como una dependencia del efecto

  return (
    <div className="mb-2">
      <label className="text-white">{label}</label>
      <div className="relative">
        <select
          className="w-full outline-none rounded-md pl-2 pr-2 py-2"
          onChange={onChange}
        >
          {/* Agregar una opción para "Seleccione..." */}
          <option key="seleccione" value="">
            Seleccione...
          </option>
          {/* Mapear las instituciones cargadas desde Firestore */}
          {lista.map((tupla) => (
            <option key={tupla.id} value={tupla.nombre}>
              {tupla.nombre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectorColecciones;
