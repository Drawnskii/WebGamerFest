import React from "react";
import Navbar from "./Narvbar/Narvbar";
import PresentacionPagina from "./Presentacion/PresentacionPagina"; // Importa el nuevo componente

import Footer from "../../components/Footer/Footer";

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
    <div className="h-screen">
      <Navbar setContenido={setContenido} />
      {cambiarContenido()}
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;
