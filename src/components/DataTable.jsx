import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import SelectorColecciones from "./SelectorColecciones";
import { DataGrid } from "@mui/x-data-grid";

function DataTable() {
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
    }
  }, [nombreColeccion]);

  const columns =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          field: key,
          headerName: key,
          width: 150,
        }))
      : [];

  const handleSeleccionColeccion = (e) => {
    setNombreColeccion(e.target.value);
  };

  return (
    <div className="h-full">
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
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default DataTable;
