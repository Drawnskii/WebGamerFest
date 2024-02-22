import React, { useState } from "react";

function FrmCompetencias({ onClose, onSubmit, juegos, patrocinadores }) {
  const [selectedJuego, setSelectedJuego] = useState("");
  const [esEquipo, setEsEquipo] = useState(false);
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFinal, setHoraFinal] = useState("");
  const [aulas, setAulas] = useState("");
  const [cupoMaximo, setCupoMaximo] = useState("");
  const [selectedPatrocinador, setSelectedPatrocinador] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos de la competencia al servidor
    // Luego, puedes llamar a la función onSubmit con los datos de la competencia
    onSubmit({
      selectedJuego,
      esEquipo,
      horaInicio,
      horaFinal,
      aulas,
      cupoMaximo,
      selectedPatrocinador,
    });
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
                Agregar Nueva Competencia
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
              <label htmlFor="juegos" className="block mb-2 text-sm">
                Juego:
              </label>
              <select
                id="juegos"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                onChange={(e) => setSelectedJuego(e.target.value)}
                value={selectedJuego}
                required
              >
                <option value="" disabled>
                  Seleccione un juego
                </option>
                {juegos.map((juego) => (
                  <option key={juego.id} value={juego.nombre}>
                    {juego.nombre}
                  </option>
                ))}
              </select>
              <label
                htmlFor="patrocinadores"
                className="block mt-4 mb-2 text-sm"
              >
                Patrocinador:
              </label>
              <select
                id="patrocinadores"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                onChange={(e) => setSelectedPatrocinador(e.target.value)}
                value={selectedPatrocinador}
                required
              >
                <option value="" disabled>
                  Seleccione un patrocinador
                </option>
                {patrocinadores.map((patrocinador) => (
                  <option key={patrocinador.id} value={patrocinador.nombre}>
                    {patrocinador.nombre}
                  </option>
                ))}
              </select>
              <label htmlFor="esEquipo" className="block mt-4 mb-2 text-sm">
                ¿Es competencia en equipo?
              </label>
              <input
                type="checkbox"
                id="esEquipo"
                className="mr-2"
                checked={esEquipo}
                onChange={() => setEsEquipo(!esEquipo)}
              />
              <label htmlFor="horaInicio" className="block mt-4 mb-2 text-sm">
                Hora de Inicio:
              </label>
              <input
                type="time"
                id="horaInicio"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                value={horaInicio}
                onChange={(e) => setHoraInicio(e.target.value)}
                required
              />
              <label htmlFor="horaFinal" className="block mt-4 mb-2 text-sm">
                Hora de Finalización:
              </label>
              <input
                type="time"
                id="horaFinal"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                value={horaFinal}
                onChange={(e) => setHoraFinal(e.target.value)}
                required
              />
              <label htmlFor="aulas" className="block mt-4 mb-2 text-sm">
                Aulas:
              </label>
              <input
                type="text"
                id="aulas"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                placeholder="Ingrese las aulas"
                value={aulas}
                onChange={(e) => setAulas(e.target.value)}
                required
              />
              <label htmlFor="cupoMaximo" className="block mt-4 mb-2 text-sm">
                Cupo Máximo de Participantes:
              </label>
              <input
                type="number"
                id="cupoMaximo"
                className="w-full p-2 border border-gray-300 rounded text-sm"
                value={cupoMaximo}
                onChange={(e) => setCupoMaximo(e.target.value)}
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

export default FrmCompetencias;
