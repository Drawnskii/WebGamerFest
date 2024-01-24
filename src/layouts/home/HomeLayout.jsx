import { Outlet } from "react-router-dom";

/* Importación de estilos */
import "../css/layout.css";

function HomeLayout() {
  return (
    <div className="gradiente h-full w-full">
      <Outlet />
    </div>
  );
}

export default HomeLayout;
