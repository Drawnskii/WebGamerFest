import React from "react";

/* Importación de estilos css */
import "../css/background.css";
import "./Baner.css";

function Baner() {
  return (
    <div className="glass sombra rounded-lg m-2">
      <section className="hero rounded-md m-2">
        <div className="content">
          <h2>Gamer Fest</h2>
          <p>Explora. Juega. Gana: Tu destino gamer comienza aquí</p>
        </div>
        <div className="waves"></div>
      </section>
    </div>
  );
}

export default Baner;
