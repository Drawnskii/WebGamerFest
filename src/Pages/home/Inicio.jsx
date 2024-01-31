import React from "react";
import Sidebar from "./Sidebar";
import Baner from "./Baner";
import Contenedor from "./Contenedor";

function Inicio() {
  return (
    <div className="flex h-full">
      <div className="flex-initial w-[395px]">
        <Sidebar />
      </div>
      <div className="flex-initial w-full h-full">
        <div className="flex flex-col h-full">
          <Baner />
          <Contenedor />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
