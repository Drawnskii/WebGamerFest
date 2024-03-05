import React from "react";
import "./About.css";
import img1 from "../imagenes/blog2.png";
import img2 from "../imagenes/blog1.png";
import icon1 from "../imagenes/logogamer.png";


import { Fade } from "react-reveal";

const Blog = () => {
  return (
    <div className="mx-[32px] mt-[80px] relative">
      <img src={icon1} className="absolute left-[40%] top-[70px]" alt="" />
      <img src={icon1} className="absolute left-[88%]]" alt="" />
      <img src={icon1} className="absolute left-[10%] top-[30%]" alt="" />
      <img src={icon1} className="absolute left-[46%] top-[30%]" alt="" />
      <img src={icon1} className="absolute left-[84%] top-[30%]" alt="" />
      <img src={icon1} className="absolute left-[20%] bottom-[5%]" alt="" />
      <img src={icon1} className="absolute left-[47%] bottom-[5%]" alt="" />

      <div className="flex">
        <Fade left delay={1000}>
          <div className="w-1/2">
            <div className="blog-cont-img cursor-pointer w-[572px] h-[354px]">
              <div className="blogImg">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </Fade>

        <Fade left delay={1000}>
          <div className="w-1/2 p-[80px]">
            <h1 className="text-[35px] font-bold text-center">
             Conoce Quienes Somos
            </h1>
            <p className="text-[13px] text-white mt-[16px] text-center font-fold">
            Bienvenido al mundo del Gamer Fest, donde la pasión por los videojuegos se encuentra con la emoción de los eventos en vivo. En nuestro festival, celebramos la diversidad de la comunidad gamer, ofreciendo experiencias únicas, torneos emocionantes y la oportunidad de conectarte con otros entusiastas de los videojuegos. Nos dedicamos a crear un espacio donde los jugadores pueden explorar, competir y compartir su amor por los videojuegos. Únete a nosotros para vivir momentos inolvidables, descubrir nuevos juegos y celebrar la cultura gamer. ¡Bienvenido a Gamer Fest, donde la diversión nunca termina!
            </p>
          </div>
        </Fade>
      </div>

      <div className="flex mt-[40px]">
        <Fade right delay={2500}>
          <div className="w-1/2 p-[80px]">
            <h1 className="text-5xl font-bold">
              Forma parte de este gran evento
            </h1>
            <p className="text-[13] text-white mt-[16px] font-fold text-center">
            Únete a nosotros en este emocionante evento, donde la comunidad gamer se reúne para compartir su pasión y disfrutar de experiencias inolvidables. En nuestro espacio, encontrarás todo lo que necesitas para sumergirte en el mundo de los videojuegos: desde los últimos lanzamientos hasta clásicos atemporales, torneos competitivos y actividades emocionantes. Estamos comprometidos a brindarte la mejor experiencia, donde cada momento se llena de diversión y camaradería. ¡Te esperamos para formar parte de esta gran celebración gamer!
            </p>
            <div className="mt-[18px]">
              <h3 className="text-[18px] font-[600]">Nombre del cliente</h3>
              <div className="flex gap-[18px] mt-[8px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]"></div>
                <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]"></div>
                <div className="w-[18px] h-[6px] rounded-full bg-[#2AC01D]"></div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade top delay={200}>
          <div className="ml-[60px] blog-cont-img w-[572px] h-[354px]">
            <div className="blogImg">
              <img src={img2} alt="" />
            </div>
          </div>
        </Fade>
      </div>

      <hr className="mt-[70px]" />
    </div>
  );
};

export default Blog;
