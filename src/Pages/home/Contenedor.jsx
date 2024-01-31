// Contenedor.jsx
import React from "react";
import "../css/background.css";
import DataTable from "../../components/DataTable";

function Contenedor({ opcion }) {
  return (
    <div className="rounded-lg m-2 glass sombra p-2 h-full">
      <div className="bg-light-purple p-1 rounded-md h-full">
        {/* Renderizar el componente DataTable con la opción seleccionada */}
        {opcion === "Administrar Datos" && <DataTable />}
        {/* Agregar más opciones */}
      </div>
    </div>
  );
}

export default Contenedor;
