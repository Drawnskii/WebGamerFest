import React, { useState } from "react";

import { FaEyeSlash, FaEye, FaLock } from "react-icons/fa";

function Contrasenia({ label, placeholder, onChange }) {
  // Función para cambiar el estado de los campos contraseña
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-2">
      <label className=" text-white">{label}</label>
      <div className="relative">
        <FaLock className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type={showPassword ? "text" : "password"}
          className="w-full outline-none rounded-md px-8 py-2"
          placeholder={placeholder}
          onChange={onChange} // Aquí se pasa el onChange
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
  );
}

export default Contrasenia;
