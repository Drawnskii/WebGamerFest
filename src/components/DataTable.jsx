import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import SelectorColecciones from "./SelectorColecciones";
import { DataGrid } from "@mui/x-data-grid";

// Importación de componentes de Personalizados
import FrmJuegos from "../forms/FrmJuegos";
import FrmCompetencias from "../forms/FrmCompetencias";
import FrmPatrocinadores from "../forms/FrmPatrocinadores";
import useModal from "../forms/useModal";

function DataTable() {
  const { showModal, openModal, closeModal } = useModal(); // Usa la función useModal

  // Función para manejar la acción de editar
  const handleEditar = () => {
    openModal(); // Abre el modal del formulario
  };

  // Función para determinar qué formulario renderizar según el nombre de la colección
  const renderFormulario = () => {
    switch (nombreColeccion) {
      case "juegos":
        return <FrmJuegos onClose={closeModal} />;
      case "competencias":
        return <FrmCompetencias onClose={closeModal} />;
      case "patrocinadores":
        return <FrmPatrocinadores onClose={closeModal} />;
      default:
        return null;
    }
  };

  const [data, setData] = useState([]);
  const [nombreColeccion, setNombreColeccion] = useState("");
  const [colecciones, setColecciones] = useState([]);

  useEffect(() => {
    if (nombreColeccion) {
      const fetchData = async () => {
        try {
          const collectionRef = collection(db, nombreColeccion);
          const querySnapshot = await getDocs(collectionRef);
          const collectionData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(collectionData);
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      };

      fetchData();
    } else {
      setData([]);
    }
  }, [nombreColeccion]);

  const handleSeleccionColeccion = (e) => {
    setNombreColeccion(e.target.value);
  };

  const handleEliminarRegistro = async (id) => {
    try {
      await deleteDoc(doc(db, nombreColeccion, id));
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  };

  const renderAcciones = (params) => {
    // Deshabilitar o no renderizar los botones
    if (["provincias", "instituciones", "usuarios"].includes(nombreColeccion)) {
      return null; // No renderizar los botones
    }

    return (
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleEditar}
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEliminarRegistro(params.id)}
        >
          Eliminar
        </button>
      </div>
    );
  };

  let columns = [];
  if (data.length > 0) {
    columns = Object.keys(data[0]).map((key) => ({
      field: key,
      headerName: key,
      width: 150,
    }));
    // Eliminar la primera columna
    columns.shift();
  }

  columns.push({
    field: "acciones",
    headerName: "Acciones",
    width: 200,
    renderCell: renderAcciones,
  });

  return (
    <div className="h-full max-w-[1200px]">
      <div className="border rounded-md border-white m-2 p-3">
        <SelectorColecciones
          label="Seleccione una colección:"
          onChange={handleSeleccionColeccion}
          colecciones={colecciones}
        />
      </div>
      <div className="m-2 h-[49vh]">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </div>
      {/* Renderizado del modal a selección */}
      {showModal && renderFormulario(nombreColeccion)}
    </div>
  );
}

export default DataTable;
