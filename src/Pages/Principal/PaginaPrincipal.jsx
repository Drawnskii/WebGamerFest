import { useState } from "react";
import Navbar from "./Narvbar/Narvbar";
import PresentacionPagina from "./Presentacion/PresentacionPagina"; // Importa el nuevo componente

import Footer from "../../components/Footer/Footer";
import About from "./About/About";
import Contacto from "./Contacto/Contacto";

const PaginaPrincipal = () => {
  const [contenido, setContenido] = useState(0);

  const handdleContenido = (indice) => {
    setContenido(indice);
  };

  const cambiarContenido = () => {
    switch (contenido) {
      case 0:
        return <PresentacionPagina />;
      case 1:
        return <About />;
      case 2:
        return <Contacto />;
    }
  };

  return (
    <div className="h-screen">
      <Navbar handdleContenido={handdleContenido} />
      {cambiarContenido()}
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;
