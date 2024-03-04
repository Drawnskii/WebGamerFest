// Importaciones de React Router y React
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

/* Layouts */
import AuthLayout from "./layouts/auth/AuthLayout"; // Layout de autenticación
import HomeLayout from "./layouts/home/HomeLayout"; // Layout de la página de inicio

/* Pages */
import Login from "./Pages/auth/Login"; // Página de inicio de sesión
import Registro from "./Pages/auth/Registro"; // Página de registro
import Error404 from "./Pages/404"; // Página de error 404
import Inicio from "./Pages/home/Inicio"; // Página principal del home
import EmailNoVerificado from "./Pages/auth/EmailNoVerificado";

/* Componentes */
import { AuthContext } from "./context/AuthContext"; // Contexto de autenticación
import { RoleContextProvider } from "./context/RoleContext"; // Contexto de rol
import RecuperarContrasenia from "./Pages/auth/RecuperarContrasenia";

function App() {
  // Obtener el estado de autenticación del contexto
  const { currentUser } = useContext(AuthContext);

  // Componente que requiere autenticación para acceder
  const RequireAuth = ({ children }) => {
    // Si hay un usuario autenticado, renderiza los componentes hijos
    // De lo contrario, redirige a la página de inicio
    return currentUser ? children : <Navigate to="/" />;
  };

  const RequireNoAuth = ({ children }) => {
    return currentUser ? <Navigate to="/home" /> : children;
  };

  const RequireEmailVerification = ({ children }) => {
    return currentUser.emailVerified ? children : <EmailNoVerificado />;
  };

  // Renderizado de las rutas de la aplicación
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas para el layout de autenticación */}
        <Route path="/" element={<AuthLayout />}>
          <Route
            index
            element={
              <RequireNoAuth>
                <Login />
              </RequireNoAuth>
            }
          />{" "}
          {/* Página de inicio de sesión */}
          <Route
            path="registro"
            element={
              <RequireNoAuth>
                <Registro />
              </RequireNoAuth>
            }
          />{" "}
          <Route
            path="nueva_contrasenia"
            element={
              <RequireNoAuth>
                <RecuperarContrasenia />
              </RequireNoAuth>
            }
          />{" "}
          {/* Página de registro */}
        </Route>
        {/* Rutas para el layout de la página de inicio */}
        <Route path="/home" element={<HomeLayout />}>
          {/* Ruta protegida que requiere autenticación */}
          <Route
            index
            element={
              <RequireAuth>
                <RequireEmailVerification>
                  <RoleContextProvider>
                    <Inicio /> {/* Página principal del home */}
                  </RoleContextProvider>
                </RequireEmailVerification>
              </RequireAuth>
            }
          />
        </Route>
        {/* Ruta para manejar errores 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
