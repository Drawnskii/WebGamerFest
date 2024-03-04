import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../../firebase";

function CambiarContrasenia() {
  const { oobCode } = useParams(); // Obtener el código de un solo uso del parámetro de la URL
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const handleSetNewPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, password);
      setSuccessMessage("Tu contraseña ha sido restablecida exitosamente.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="absolute glass sombra p-8 rounded-md w-96">
      <div className="mb-8 flex justify-center">
        <h1 className="text-3xl uppercase font-bold  text-white">
          Nueva Contraseña
        </h1>
      </div>
      <form onSubmit={handleSetNewPassword}>
        <div className="mb-4">
          <label className="text-white">Nueva Contraseña:</label>
          <input
            type="password"
            className="rounded w-full pl-2 py-2"
            placeholder="Nueva Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-white">Confirmar Contraseña:</label>
          <input
            type="password"
            className="rounded w-full pl-2 py-2"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Establecer Nueva Contraseña
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          <div>
            ¿Necesitas ayuda?{" "}
            <Link
              to="/"
              className="text-light-green font-semibold hover:underline transition-all"
            >
              Contacta con Soporte
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CambiarContrasenia;
