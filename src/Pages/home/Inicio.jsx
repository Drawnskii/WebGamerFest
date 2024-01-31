// Inicio.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import Baner from "./Baner";
import Contenedor from "./Contenedor";

function Inicio() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("Inicio");

  const handleOptionSelect = (option) => {
    setOpcionSeleccionada(option);
  };

  return (
    <div className="flex h-full">
      <div className="flex-initial w-[395px]">
        <Sidebar onSidebarClick={handleOptionSelect} />
      </div>
      <div className="flex-initial w-full h-full">
        <div className="flex flex-col h-full">
          <Baner />
          <Contenedor opcion={opcionSeleccionada} />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
