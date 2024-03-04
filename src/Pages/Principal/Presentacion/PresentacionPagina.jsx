import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./PresentacionPagina.css"; // Asegúrate de importar tus estilos

import PortadaFornite from "../imagenes/FornitePortada.png";
import PortadaValorant from "../imagenes/PortadaValorant.png";
import PortadaDragon from "../imagenes/PortadaDragon.png";
import PortadaMinecraft from "../imagenes/PortadaMinecraft.png";
import PortadaMortal from "../imagenes/PortadaMortal.png";
import PortadaSmash from "../imagenes/PortadaSmash.png";
import PortadaRoblox from "../imagenes/PortadaRoblox.png";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 4;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const portadas = [PortadaFornite, PortadaValorant, PortadaDragon, PortadaMinecraft, PortadaMortal, PortadaSmash, PortadaRoblox];

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(-2);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => (pv === portadas.length - 2 ? -1 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < portadas.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="presentacion-container">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: -imgIndex * 100 + "%",
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="carousel-container"
      >
        {portadas.map((imgSrc, idx) => (
          <motion.div key={idx} className="carousel-item">
            <img
              src={imgSrc}
              alt={`Portada ${idx}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="dots-container">
        {portadas.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx - 1)}
            className={`dot ${idx - 1 === imgIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="gradient-edges" />
      <div className="gradient-edges right" />
    </div>
  );
};

export default SwipeCarousel;
