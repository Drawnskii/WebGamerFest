// Importación de íconos
import { FaEnvelope } from "react-icons/fa";

function Email({ onChange }) {
  return (
    <div className="mb-2">
      <label className=" text-white">Correo electrónico:</label>
      <div className="relative">
        <FaEnvelope className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          className="w-full outline-none rounded-md px-8 py-2"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Email;
