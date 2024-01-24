/* Librerías de react */
import { useState } from "react";
import { Link } from "react-router-dom";

/* Importación de componentes */
import Contrasenia from "./components/Contrasenia";
import Email from "./components/Email";

/* Importación de estilos css */
import "../css/background.css";

function Registro() {
  // Función para cambiar el estado de los campos contraseña
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="absolute glass sombra p-8 rounded-md w-96">
      <div className="mb-8 flex justify-center">
        <h1 className="text-3xl uppercase font-bold  text-white">
          Crear Cuenta
        </h1>
      </div>
      <form>
        <div className="mb-2 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="txtNombre" className=" text-white">
              Nombre:
            </label>
            <input
              type="text"
              className="rounded w-full pl-2 py-2"
              id="txtNombre"
              placeholder="Nombre(s)"
            />
          </div>
          <div>
            <label htmlFor="txtApellido" className=" text-white">
              Apellido:
            </label>
            <input
              type="text"
              className="rounded w-full  pl-2 py-2"
              id="txtApellido"
              placeholder="Apellidos(s)"
            />
          </div>
        </div>
        <Email />
        <Contrasenia
          label={"Contraseña:"}
          placeholder={"Escriba una contraseña"}
        />
        <Contrasenia
          label={"Confirmar contraseña"}
          placeholder={"Escriba nuevamente su contraseña"}
        />
        <div className="mt-2">
          <button className="bg-light-green rounded-md text-dark-purple w-full py-2 mt-4">
            Registrarse
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          <div>
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/"
              className="text-light-green font-semibold hover:underline transition-all"
            >
              Inicia Sesión
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registro;
