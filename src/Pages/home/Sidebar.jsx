import { useContext } from "react";

/* Importación de estilos css */
import "../css/background.css";
import { IoGameController, IoStatsChart } from "react-icons/io5";
import {
  FaHome,
  FaSignOutAlt,
  FaDatabase,
  FaTrophy,
  FaMoneyBill,
} from "react-icons/fa";

// Importación de componentes
import { AuthContext } from "../../context/AuthContext";
import { RoleContext } from "../../context/RoleContext";

function Sidebar({ onSidebarClick }) {
  // Importación del contexto del rol del usuario
  const { isAdmin } = useContext(RoleContext);

  // Obtener el dispatch del contexto de autenticación
  const { dispatch } = useContext(AuthContext);

  // Manejar el clic en el botón de cerrar sesión
  const handleLogout = () => {
    // Despachar la acción de tipo "LOGOUT"
    dispatch({ type: "LOGOUT" });
  };

  const handleOptionClick = (option) => {
    onSidebarClick(option); // Llama a la función proporcionada por el componente principal
  };

  return (
    <div>
      <div className="fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] text-center glass sombra m-2 rounded-lg">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <div className=" rounded-md bg-light-green p-1">
              <IoGameController />
            </div>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Gamer Fest
            </h1>
          </div>
          <div className="my-2 bg-gray-400 h-[1px]"></div>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white">
          <FaHome />
          <span
            className="text-[15px] ml-4 text-gray-200 font-bold"
            onClick={() => handleOptionClick("Inicio")}
          >
            Inicio
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white">
          <FaTrophy />
          <span
            className="text-[15px] ml-4 text-gray-200 font-bold"
            onClick={() => handleOptionClick("Consultar Torneos")}
          >
            Consultar Torneos
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white">
          <FaMoneyBill />
          <div className="flex justify-between w-full items-center">
            <span
              className="text-[15px] ml-4 text-gray-200 font-bold"
              onClick={() => handleOptionClick("Consultar Patrocinadores")}
            >
              Consultar Patrocinadores
            </span>
          </div>
        </div>

        {isAdmin && (
          <>
            <div className="my-4 bg-gray-400 h-[1px]"></div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white">
              <FaDatabase />
              <div className="flex justify-between w-full items-center">
                <span
                  className="text-[15px] ml-4 text-gray-200 font-bold"
                  onClick={() => handleOptionClick("Administrar Datos")}
                >
                  CRUD
                </span>
              </div>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white">
              <IoStatsChart />
              <div className="flex justify-between w-full items-center">
                <span
                  className="text-[15px] ml-4 text-gray-200 font-bold"
                  onClick={() => handleOptionClick("Estadísticas")}
                >
                  Estadísticas
                </span>
              </div>
            </div>
          </>
        )}

        <div className="my-4 bg-gray-400 h-[1px]"></div>
        {/* Botón de salida */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-purple-600 text-white">
          <FaSignOutAlt />
          <span
            className="text-[15px] ml-4 text-gray-200 font-bold"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
