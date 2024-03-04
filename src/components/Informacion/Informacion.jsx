/* Importación de estilos css */
import "../../Pages/css/background.css";
import "./Informacion.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

/* Aos*/
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

function Inicio() {
  const [competencias, setCompetencias] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const fetchCompetencias = async () => {
      try {
        const competenciasSnapshot = await getDocs(
          collection(db, "competencias")
        );
        const competenciasData = competenciasSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompetencias(competenciasData);
      } catch (error) {
        console.error("Error al obtener las competencias:", error);
      }
    };

    fetchCompetencias();
  }, []);
  return (
    <div className="text-white ">

      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-2 ml-2">
          {competencias.map((competencia) => (
            <div
              key={competencia.id}
              className="relative rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105"
            >
              
              {competencia.imagenJuego && (
                <img
                  src={competencia.imagenJuego}
                  alt={competencia.selectedJuego}
                  className="w-full  rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex">
        <div data-aos="fade-right" data-aos-duration="2000">
          <div className="w-1/2">
            <div className="blog-cont-img cursor-pointer w-[472px] h-[500px]">
              <div className=" blogImg">
                 <div className="img ">
                    <img src={img1} alt="" />
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="2000">
          <div className="m-4 rounded-lg  p-[60px]">
            <h1 className="text-[35px] font-[700] text-center">
              Bienvenidos al Epicentro Competitivo
            </h1>
            <p className="text-[15px] mt-[16px] text-center">
              ¡Bienvenidos a la casa de los desafíos digitales! Aquí, no se trata solo de jugar, sino de competir con una intensidad que hará latir tu corazón a mil por hora. Desde los escenarios amateurs hasta las ligas profesionales, nuestra plataforma es el epicentro donde convergen la habilidad, la estrategia y la camaradería virtual. Únete a la comunidad de guerreros digitales que desafían los límites y dan forma al futuro de la competición en línea. ¡Prepárate para elevar tu juego y escribir tu propia leyenda en nuestras arenas virtuales!
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-[10px]">
        <div data-aos="fade-right" data-aos-duration="2000">
          <div className=" p-[30px]">
            <h1 className="text-[35px] font-[700] text-center">
              Eleva tu Juego, Gana a tus rivales y convierte en el mejor
            </h1>
            <p className="text-[13] mt-[16px] text-center">
            Emociones en cada clic! Bienvenidos a nuestro universo, donde los teclados son espadas y los ratones, herramientas de conquista.  Sumérgete en el pulso acelerado de los torneos online, donde cada clic y estrategia moldean el destino de los guerreros digitales. ¡Prepárate para sentir la emoción, el drama y la gloria en cada partida!
            </p>
            
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000">
          <div className="ml-[60px] mr-[60px] mt-[30px] blog-cont-img w-[476px] ">
            <div className="blogImg">
              <img src={img2} alt="" /> 
              
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-[110px]" />
    </div>
  );
}

export default Inicio;