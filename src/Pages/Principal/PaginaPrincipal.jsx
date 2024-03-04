import React from "react";
import Navbar from "./Narvbar/Narvbar";
import PresentacionPagina from "./Presentacion/PresentacionPagina"; // Importa el nuevo componente


const PaginaPrincipal = () => {
  const [contenido, setContenido] = React.useState(1);

  const cambiarContenido = () => {
    switch (contenido) {
      case 1:
        return <PresentacionPagina />;
      case 2:
        return <div>Contenido 2 para la Página Principal</div>;
      default:
        return <div>Contenido predeterminado para la Página Principal</div>;
    }
  };

  return (
    <div>
      <Navbar setContenido={setContenido} />
      {cambiarContenido()}
    </div>
  );
};

export default PaginaPrincipal;
