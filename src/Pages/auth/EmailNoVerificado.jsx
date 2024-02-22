import { useContext } from "react";

// Importación de estilos css
import "../css/background.css";
import { FaSignOutAlt } from "react-icons/fa";

// Importación de componentes
import { AuthContext } from "../../context/AuthContext";

const EmailNoVerificado = () => {
  // Obtener el dispatch del contexto de autenticación
  const { dispatch } = useContext(AuthContext);

  // Manejar el clic en el botón de cerrar sesión
  const handleLogout = () => {
    // Despachar la acción de tipo "LOGOUT"
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sombra p-4 rounded-lg">
      <div className="grid grid-cols-1 justify-items-center">
        <h1 className="text-3xl uppercase font-bold text-white mb-4">
          ¡ATENCIÓN!
        </h1>
        <p className="text-white text-center">
          Por favor, confirma tu correo electrónico para poder acceder a la web.
        </p>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white">
          <FaSignOutAlt />
          <span
            className="text-[15px] ml-4 text-gray-200 font-bold"
            onClick={handleLogout}
          >
            Salir
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmailNoVerificado;
