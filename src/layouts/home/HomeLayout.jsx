import { Outlet } from "react-router-dom";

/* Importación de estilos */
import "../css/layout.css";

function HomeLayout() {
  return (
    <div className="gradiente h-[100vh] w-full">
      <Outlet />
    </div>
  );
}

export default HomeLayout;
