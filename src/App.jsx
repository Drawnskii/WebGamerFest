import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layouts */
import AuthLayout from "./layouts/auth/AuthLayout";
import HomeLayout from "./layouts/home/HomeLayout";

/* Pages */
import Login from "./Pages/auth/Login";
import Registro from "./Pages/auth/Registro";
import Error404 from "./Pages/404";
import VentanaPrincipal from "./Pages/home/VentanaPrincipal";

/* Aquí se importa el componente al que se le quiere agregar una ruta */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>
        <Route path="/home/" element={<HomeLayout/>}>
          <Route path="ventana" element={<VentanaPrincipal />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
