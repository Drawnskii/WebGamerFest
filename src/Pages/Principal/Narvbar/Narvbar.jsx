import React from "react";
import "./Narvbar.css";
import logogamer from "../imagenes/logogamer.png";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const Navbar = ({ handdleContenido }) => {
  return (
    <div className="navbar-contenedor">
      <div className="navbar-sub-contenedor pl-72">
        <div className="navbar">
          {/* Elimina el Link alrededor de la imagen */}
          <div className="navbar-logo">
            <img src={logogamer} alt="Logo" />
          </div>
          <ul className="nav-animado">
            <li>
              <a href="#!" onClick={() => handdleContenido(5)}>
                HOME
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handdleContenido(1)}>
                SOBRE NOSOTROS
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handdleContenido(5)}>
                CONTACTANOS
              </a>
            </li>
          </ul>
          <div className="botones-derecha">
            {/* Utiliza Link para el botón de Iniciar Sesión */}
            <Link to="/login" className="btn-iniciar-sesion">
              Iniciar Sesión
            </Link>
            {/* Utiliza Link para el botón de Registrarse */}
            <Link to="/registro" className="btn-registrarse">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
