// Contenedor.jsx
import React from "react";
import "../css/background.css";
import DataTable from "../../components/DataTable";
import TarjetasJuegos from "../../components/TarjetasJuegos";
import GridPatrocinadores from "../../components/GridPatrocinadores";
import Informacion from "../../components/Informacion/Informacion";

function Contenedor({ opcion }) {
  return (
    <div className="rounded-lg m-2 glass sombra p-2 min-h-[503px] ">
      <div className="bg-light-purple p-1 rounded-md min-h-[486px]">
        {/* Renderizar el componente DataTable con la opción seleccionada */}
        {opcion === "Administrar Datos" && <DataTable />}
        {opcion === "Consultar Torneos" && <TarjetasJuegos />}
        {opcion === "Consultar Patrocinadores" && <GridPatrocinadores />}
        {opcion === "Inicio" && <Informacion />}
        {/* Agregar más opciones */}
      </div>
    </div>
  );
}

export default Contenedor;
