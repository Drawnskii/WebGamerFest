import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="absolute bg-dark-purple p-8 rounded-lg w-96">
      <div className="mb-4">
        <h1 className="text-white text-3xl uppercase font-bold text-center">INICIAR SESIÓN</h1>
      </div>
      <form className="flex flex-col gap-4">
      <div className="mb-2">
      <label htmlFor="txtPassword" className=" text-white">
            Correo Electrónico:
          </label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            id="email"
            placeholder="Correo electrónico"
            className="w-full pl-10 border border-gray-200 outline-none py-2 px-4 rounded-lg "
          />
        </div>
      </div>
      <div className="mb-2">
      <label htmlFor="txtPassword" className=" text-white">
            Contraseña:
          </label>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Contraseña"
            className="w-full pl-10 border border-gray-200 outline-none py-2 px-4 rounded-lg"
          />
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>
        <div>
          <button className="bg-light-green rounded-md text-bg-dark-purple w-full py-2 px-6">Ingresar</button>
        </div>
        <div className="text-center text-white">
          ¿No tienes una cuenta? <a href="/registro" className="text-light-green font-semibold">Regístrate aquí</a>.
        </div>
      </form>
    </div>
  );
};

export default Login;
