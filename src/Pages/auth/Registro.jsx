/* Librerías de react */
import { useState } from "react";

/* Importación de íconos */
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div className="bg-dark-purple p-8 rounded-md w-96">
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
        <div className="mb-2">
          <label htmlFor="txtEmail" className=" text-white">
            Correo:
          </label>
          <div className="relative">
            <CiMail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              className="rounded w-full px-7 py-2"
              id="txtEmail"
              placeholder="Correo Electrónico"
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="txtPassword" className=" text-white">
            Contraseña:
          </label>
          <div className="relative">
            <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              className="rounded w-full px-7 py-2"
              id="txtPassword"
              placeholder="Contraseña"
            />
            {/* Control del estado, del ícono para mostrar contraseña */}
            {showPassword ? (
              <FaEyeSlash
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
                onClick={handleShowPassword}
              />
            ) : (
              <FaEye
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
                onClick={handleShowPassword}
              />
            )}
          </div>
        </div>
        <div>
          <label htmlFor="txtConfirmPassword" className=" text-white">
            Confirmar contraseña:
          </label>
          <div className="relative">
            <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="rounded w-full px-7 py-2"
              id="txtConfirmPassword"
              placeholder="Contraseña"
            />
            {/* Control del estado, del ícono para mostrar contraseña */}
            {showConfirmPassword ? (
              <FaEyeSlash
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
                onClick={handleConfirmPassword}
              />
            ) : (
              <FaEye
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
                onClick={handleConfirmPassword}
              />
            )}
          </div>
        </div>
        <div className="mt-2">
          <button className="bg-light-green rounded-md text-dark-purple w-full py-2 mt-4">
            Registrarse
          </button>
        </div>
        <div className="mt-4 text-center">
          <div>
            <label className="text-white">¿Ya tienes una cuenta? </label>
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
