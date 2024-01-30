/* Librerías de react */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

/* Importación de componentes */
import Contrasenia from "../../components/Contrasenia";
import Email from "../../components/Email";
import { AuthContext } from "../../context/AuthContext";

/* Importación de estilos css */
import "../css/background.css";

/* Importación de librerias de conexión con firebase */
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();

    // Uso de la instancia de autenticación (auth)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registrado
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/home/inicio");
      })
      .catch((error) => {
        // Errores en caso de no exita dicha cuenta
        setError(error.message);
      });
  };

  return (
    <div className="absolute sombra">
      <div className="grid grid-cols-2">
        <div className="glass p-8 rounded-l-lg w-96">
          <div className="mb-8 flex justify-center">
            <h1 className="text-3xl uppercase font-bold  text-white">
              INICIAR SESIÓN
            </h1>
          </div>
          <form onSubmit={handleLogin}>
            {/* Al haber un cambio se actutalizan los valores del componente Email y Contrasenia */}
            <Email onChange={(e) => setEmail(e.target.value)} />
            <Contrasenia
              label={"Contraseña:"}
              placeholder={"Ingrese su contraseña"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button
                type="submit"
                className="bg-light-green rounded-md text-dark-purple w-full py-2 mt-4"
              >
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
