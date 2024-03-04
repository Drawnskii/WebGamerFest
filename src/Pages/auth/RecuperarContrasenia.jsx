import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

function RecuperarContrasenia() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage(
        "Se ha enviado un correo electrónico para restablecer tu contraseña."
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="absolute glass sombra p-8 rounded-md w-96">
      <div className="mb-8 flex justify-center">
        <h1 className="text-3xl uppercase font-bold  text-white">
          Cambio de Contraseña
        </h1>
      </div>
      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label className="text-white">Correo Electrónico:</label>
          <input
            type="email"
            className="rounded w-full pl-2 py-2"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}
        <div className="mt-2">
          <button
            type="submit"
            className="bg-light-green rounded-md text-dark-purple w-full py-2 mt-4"
          >
            Enviar Correo de Restablecimiento
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          <div>
            ¿Recuerdas tu contraseña?{" "}
            <Link
              to="/"
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

export default RecuperarContrasenia;
