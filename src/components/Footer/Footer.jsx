import React from "react";
import "./Footer.css";
import logo from "./brand1.png";
import payment from "./payment.png";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";


/* Aos*/
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="footer-container text-white bg-dark-purple h-[380px] relative overflow-hidden">
      <div className="mx-8 md:mx-32 flex justify-between items-center pt-8">
        {/* Sección del Logo y "Call Us" */}
        <div className="text-center flex items-center">
          <div>
            <img src={logo} className="w-[150px] h-[93px]" alt="Logo" />
          </div>
          <div className="ml-4 md:ml-8">
            <h3 className="text-[18px] font-[500]">
              Llámanos <br />
              <span className="font-[600]">+009 000 000</span>
            </h3>
          </div>
        </div>

        {/* Sección "Follow Us" */}
        <div className="text-center md:ml-12">
          <h3 className="text-[18px] font-[500]">Síganos</h3>
          <div className="flex gap-4 md:gap-6 mt-2">
            <a href="https://www.facebook.com/gamerfest.ec/" target="_blank" rel="noopener noreferrer" className="bottom-social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/gamerfest.ec/" target="_blank" rel="noopener noreferrer" className="bottom-social-icon">
              <BsInstagram />
            </a>  
            <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer" className="bottom-social-icon">
              <BsTwitter />
            </a>
            <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer" className="bottom-social-icon">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Sección del Logotipo de Pagos */}
        <div>
          <img src={payment} alt="Payment" className="w-[200px] h-[60px]" />{" "}
        </div>
      </div>
      <div className="mt-[24px] mx-[320px] hr-line bg-white" />

      <div className="text-center mx-[320px] mt-[25px] pb-[25px] flex justify-between">
        <div data-aos="fade-left" data-aos-duration="2000">
          <div className="footer-info w-[250px] h-[250px] z-[5]">
            <h2 className="text-[22px] font-[600] mb-4">Ubicación</h2>
            <p>Dirección de la tienda y ubicación de la sucursal</p>
            <p>support@gmail.com</p>
          </div>
        </div>
        
        <div data-aos="fade-left" data-aos-duration="2000">
          <div className="footer-info w-[250px] h-[250px] z-[4]">
            <h2 className="text-[22px] font-[600] mb-4">Categorias</h2>
            <p>Estrategia</p>
            <p>Acción</p>
            <p>Aventura</p>
            <p>Peleas</p>
            <p>Carreras</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
