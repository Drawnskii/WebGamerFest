// Importación de íconos
import { IoIosCall, IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contacto() {
  return (
    <div className="flex w-full h-[75vh] justify-center items-center">
      <div className="flex flex-col space-y-6 w-full max-h-full max-w-4xl p-8">
        <div className="flex flex-col space-y-10 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide text-white">Contáctanos</h1>
            <p className="pt-2 text-white">
              Puedes cominicarte con nosotros por medio de los siguientes
              medios.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="text-xl">
              <IoIosCall />
            </div>
            <span>+593 95875863</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="text-xl">
              <IoMdMail />
            </div>
            <span>contacto@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="text-xl">
              <IoLocation />
            </div>
            <span>12986, ESPE, Campus Guillermo Rodriguez Lara</span>
          </div>
          <div className="flex space-x-2 pt-10 text-lg text-white">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="bg-soft-green text-white space-y-6 w-96 p-8">
        <form action="" className="flex flex-col space-y-4 max-h-full">
          <div>
            <label for="" className="text-sm">
              Nombre:
            </label>
            <input
              typeof="text"
              placeholder="Ingresa tu nombre"
              className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring"
            />
          </div>
          <div>
            <label for="" className="text-sm">
              Correo electrónico:
            </label>
            <input
              typeof="email"
              placeholder="Ingresa tu email"
              className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring"
            />
          </div>
          <div>
            <label for="" className="text-sm">
              Mensaje:
            </label>
            <textarea
              placeholder="Ingresa tu mensaje"
              rows={"4"}
              className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring"
            ></textarea>
          </div>
          <button className="inline-block self-end bg-[#5ce8b1] text-[#2e1d4b] font-bold rounded-lg px-6 py-2">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
