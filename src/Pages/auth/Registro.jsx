/* Librerías de react */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* Importación de componentes */
import Contrasenia from "../../components/Contrasenia";
import Email from "../../components/Email";
import SelectorColecciones from "../../components/SelectorColecciones";
import SelectorFechas from "../../components/SelectorFechas";

/* Importación de estilos css */
import "../css/background.css";

/* Importación de componentes de firebase */
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

function Registro() {
  const [error, setError] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [provincia, setProvincia] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // Función para controlar el registro de un nuevo usuario
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Registra al usuario utilizando Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Obtiene el ID de usuario generado por Firebase Authentication
      const userId = userCredential.user.uid;

      sendEmailVerification(auth.currentUser).then(() => {
        alert(
          "¡Se ha enviado una confirmación de registro a tu correo electrónico!"
        );
      });

      // Crea un documento de usuario en Firestore con el ID de usuario como identificador
      await setDoc(doc(db, "usuarios", userId), {
        nombre: nombre,
        apellido: apellido,
        email: email,
        fechaNacimiento: fechaNacimiento,
        provincia: provincia,
        institucion: institucion,
        esAdministrador: false, // Se establece que los usuarios no son administradores por defecto
      });

      // Manejar redirección o cualquier otra lógica aquí después del registro exitoso
      navigate("/");
    } catch (error) {
      // Manejar errores durante el registro
      setError(error.message);
    }
  };

  return (
    <div className="absolute glass sombra p-8 rounded-md w-96">
      <div className="mb-8 flex justify-center">
        <h1 className="text-3xl uppercase font-bold  text-white">
          Crear Cuenta
        </h1>
      </div>
      <form onSubmit={handleSignUp}>
        <div className="mb-2 grid grid-cols-2 gap-4">
          <div>
            <label className="text-white">Nombre:</label>
            <input
              type="text"
              className="rounded w-full pl-2 py-2"
              placeholder="Nombre(s)"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label className="text-white">Apellido:</label>
            <input
              type="text"
              className="rounded w-full pl-2 py-2"
              placeholder="Apellido(s)"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
        </div>
        <SelectorFechas
          label={"Fecha de Nacimiento: "}
          value={fechaNacimiento}
          onChange={(date) => setFechaNacimiento(date)}
        />
        <SelectorColecciones
          label={"Provincia de la que proviene:"}
          coleccion={"provincias"}
          onChange={(e) => setProvincia(e.target.value)}
        />
        <SelectorColecciones
          label={"Institución que lo representa"}
          coleccion={"instituciones"}
          onChange={(e) => setInstitucion(e.target.value)}
        />
        <Email value={email} onChange={(e) => setEmail(e.target.value)} />
        <Contrasenia
          label={"Contraseña:"}
          placeholder={"Escriba una contraseña"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Contrasenia
          label={"Confirmar contraseña"}
          placeholder={"Escriba nuevamente su contraseña"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="mt-2">
          <button
            type="submit"
            className="bg-light-green rounded-md text-dark-purple w-full py-2 mt-4"
          >
            Registrarse
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          <div>
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="text-light-green font-semibold hover:underline transition-all"
            >
              Inicia Sesión
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registro;
