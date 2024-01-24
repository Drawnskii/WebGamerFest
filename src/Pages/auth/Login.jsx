/* Librerías de react */
import { Link } from "react-router-dom";

/* Importación de componentes */
import Contrasenia from "./components/Contrasenia";
import Email from "./components/Email";

/* Importación de estilos css */
import "../css/background.css";

const Login = () => {
  return (
    <div className="absolute sombra">
      <div className="grid grid-cols-2">
        <div className="glass p-8 rounded-l-lg w-96">
          <div className="mb-8 flex justify-center">
            <h1 className="text-3xl uppercase font-bold  text-white">
              INICIAR SESIÓN
            </h1>
          </div>
          <form>
            <Email />
            <Contrasenia
              label={"Contraseña:"}
              placeholder={"Ingrese su contraseña"}
            />
            <div>
              <button className="bg-light-green rounded-md text-dark-purple w-full py-2 mt-4">
                Ingresar
              </button>
            </div>
            <div className="mt-4 text-center text-white">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/registro"
                className="text-light-green font-semibold hover:underline transition-all"
              >
                Regístrate aquí
              </Link>
            </div>
          </form>
        </div>
        <div className="bg-login-1 bg-cover rounded-r-lg bg-center w-full"></div>
      </div>
    </div>
  );
};

export default Login;
