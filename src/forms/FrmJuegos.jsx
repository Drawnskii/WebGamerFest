import { useState } from "react";

function FrmJuegos({ onClose, onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del juego al servidor
    // Luego, puedes llamar a la función onSubmit con los datos del juego
    onSubmit({ nombre, descripcion, imagen });
    // Una vez que se envían los datos, cierra el modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-opacity-50 bg-gray-900">
      <div className="relative w-full max-w-md mx-auto">
        <div className="bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <form onSubmit={handleSubmit}>
            <div className="p-4 border-b border-solid rounded-t border-blueGray-200">
              <h3 className="text-lg font-semibold text-center">
                Agregar Nuevo Juego
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black text-lg leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="text-black h-6 w-6 text-lg block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="p-4">
              <label htmlFor="nombre" className="block mb-2 text-sm">
                Nombre del Juego:
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                placeholder="Ingrese el nombre del juego"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label htmlFor="descripcion" className="block mt-4 mb-2 text-sm">
                Descripción del Juego:
              </label>
              <textarea
                id="descripcion"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                rows="4"
                placeholder="Ingrese la descripción del juego"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              ></textarea>
              <label htmlFor="imagen" className="block mt-4 mb-2 text-sm">
                Imagen del Juego:
              </label>
              <input
                type="file"
                id="imagen"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                accept="image/*"
                onChange={(e) => setImagen(e.target.files[0])}
                required
              />
            </div>
            <div className="flex items-center justify-end p-4 border-t border-solid rounded-b border-blueGray-200">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FrmJuegos;
