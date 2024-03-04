import { Outlet } from "react-router-dom";

/* Importación de estilos */
import "../css/layout.css";

function AuthLayout() {
  return (
    <div className="gradiente h-screen flex items-center justify-center w-full">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
