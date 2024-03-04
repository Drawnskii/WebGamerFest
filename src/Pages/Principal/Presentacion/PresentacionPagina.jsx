import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./PresentacionPagina.css";

import PortadaFornite from "../imagenes/FornitePortada.png";
import PortadaValorant from "../imagenes/PortadaValorant.png";
import PortadaDragon from "../imagenes/PortadaDragon.png";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 50,
  damping: 20,
};

const portadas = [PortadaValorant, PortadaDragon, PortadaFornite];

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % portadas.length);
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const containerX = useTransform(
    dragX,
    [-100, 0, 100],
    [(portadas.length - 1) * -100 + "%", "0%", portadas.length * 100 + "%"]
  );

  const onDragEnd = (_, info) => {
    const x = info.offset.x;

    if (x < -50 && imgIndex < portadas.length - 1) {
      setImgIndex((prevIndex) => prevIndex + 1);
    } else if (x > 50 && imgIndex > 0) {
      setImgIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="presentacion-container">
      <motion.div
        drag="x"
        dragConstraints={{
          left: -100,
          right: 100,
        }}
        style={{
          x: containerX,
        }}
        onDragEnd={onDragEnd}
        className="carousel-container"
      >
        {portadas.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            className="carousel-item"
            style={{
              flex: "1 0 100%",
              minWidth: "100%",
            }}
          >
            <img
              src={imgSrc}
              alt={`Portada ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="dots-container">
        {portadas.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`dot ${idx === imgIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <>
        <div className="gradient-edges" />
        <div className="gradient-edges right" />
      </>
    </div>
  );
};

export default SwipeCarousel;
