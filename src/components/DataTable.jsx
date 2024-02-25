import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import SelectorColecciones from "./SelectorColecciones";
import { DataGrid } from "@mui/x-data-grid";
import FrmJuegos from "../forms/FrmJuegos";
import FrmCompetencias from "../forms/FrmCompetencias";
import FrmPatrocinadores from "../forms/FrmPatrocinadores";
import useModal from "../forms/useModal";

function DataTable() {
  const { showModal, openModal, closeModal } = useModal();
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEditar = (row) => {
    setSelectedRow(row);
    openModal();
  };

  const renderFormulario = () => {
    switch (nombreColeccion) {
      case "juegos":
        return <FrmJuegos onClose={closeModal} rowData={selectedRow} />;
      case "competencias":
        return <FrmCompetencias onClose={closeModal} rowData={selectedRow} />;
      case "patrocinadores":
        return <FrmPatrocinadores onClose={closeModal} rowData={selectedRow} />;
      default:
        return null;
    }
  };

  const [data, setData] = useState([]);
  const [nombreColeccion, setNombreColeccion] = useState("");
  const [colecciones, setColecciones] = useState([]);

  useEffect(() => {
    if (nombreColeccion) {
      const unsubscribe = onSnapshot(
        collection(db, nombreColeccion),
        (snapshot) => {
          const updatedData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(updatedData);
        }
      );

      return () => unsubscribe();
    } else {
      setData([]);
    }
  }, [nombreColeccion]);

  const handleSeleccionColeccion = (e) => {
    setNombreColeccion(e.target.value);
  };

  // Función para eliminar una tupla
  const handleEliminar = async (id) => {
    try {
      await deleteDoc(doc(db, nombreColeccion, id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  };

  // Función para renderizar los botones de Editar y Eliminar
  const renderAcciones = (params) => {
    if (["provincias", "instituciones", "usuarios"].includes(nombreColeccion)) {
      return null;
    }

    return (
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEditar(params.row)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEliminar(params.id)}
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
      <div className="border rounded-md border-white m-2 p-3 flex items-center justify-between">
        <div className="flex-grow mr-4">
          <SelectorColecciones
            label="Seleccione una colección:"
            onChange={handleSeleccionColeccion}
            colecciones={colecciones}
            className="w-full mr-4"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-3 rounded"
          onClick={handleEditar}
        >
          Agregar
        </button>
      </div>

      <div className="m-2 h-[49vh]">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </div>
      {showModal && renderFormulario(nombreColeccion)}
    </div>
  );
}

export default DataTable;
