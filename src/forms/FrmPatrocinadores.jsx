import { useState } from "react";

function FrmPatrocinadores({ onClose, onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [logotipo, setLogotipo] = useState(null);
  const [premios, setPremios] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del patrocinador al servidor
    // Luego, puedes llamar a la función onSubmit con los datos del patrocinador
    onSubmit({ nombre, descripcion, logotipo, premios });
    // Una vez que se envían los datos, cierra el modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-opacity-50 bg-gray-900">
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <form onSubmit={handleSubmit}>
            <div className="p-4 border-b border-solid rounded-t border-blueGray-200">
              <h3 className="text-lg font-semibold text-center">
                Agregar Nuevo Patrocinador
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
            <div className="p-4 flex flex-col">
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  {" "}
                  {/* Aquí ajusté el ancho a w-1/2 */}
                  <label htmlFor="nombre" className="mb-2 text-sm">
                    Nombre del Patrocinador:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="Ingrese el nombre del patrocinador"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
                <div className="w-1/2 pl-2">
                  {" "}
                  {/* Aquí ajusté el ancho a w-1/2 */}
                  <label htmlFor="descripcion" className="mb-2 text-sm">
                    Descripción del Patrocinador:
                  </label>
                  <textarea
                    id="descripcion"
                    className="w-full p-2 border border-gray-300 rounded text-sm h-24 resize-none"
                    rows="4"
                    placeholder="Ingrese la descripción del patrocinador"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  {" "}
                  {/* Aquí ajusté el ancho a w-1/2 */}
                  <label htmlFor="logotipo" className="mb-2 text-sm">
                    Logotipo del Patrocinador:
                  </label>
                  <input
                    type="file"
                    id="logotipo"
                    className="w-full py-[9.8px] px-2 border border-gray-300 rounded text-sm"
                    accept="image/*"
                    onChange={(e) => setLogotipo(e.target.files[0])}
                    required
                  />
                </div>
                <div className="w-1/2 pl-2">
                  {" "}
                  {/* Aquí ajusté el ancho a w-1/2 */}
                  <label htmlFor="premios" className="mb-2 text-sm">
                    Premios que Brinda el Patrocinador:
                  </label>
                  <input
                    type="text"
                    id="premios"
                    className="w-full py-3 px-2 border border-gray-300 rounded text-sm"
                    placeholder="Ingrese los premios que brinda el patrocinador"
                    value={premios}
                    onChange={(e) => setPremios(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end p-4 border-t border-solid rounded-b border-blueGray-200">
              <button
                className="text-red-500 font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-2 mb-1 transition duration-150"
                type="button"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                className="bg-emerald-500 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-150"
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

export default FrmPatrocinadores;
