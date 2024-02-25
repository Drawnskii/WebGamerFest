import { useState, useEffect } from "react";
import { db } from "../firebase";
import { getDoc, doc, updateDoc, addDoc, collection } from "firebase/firestore"; // Agrega estas importaciones

// Importación de componentes
import SelectorColecciones from "../components/SelectorColecciones";

function FrmCompetencias({
  onClose,
  onSubmit,
  juegos,
  patrocinadores,
  rowData,
}) {
  const [selectedJuego, setSelectedJuego] = useState("");
  const [esEquipo, setEsEquipo] = useState(false);
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFinal, setHoraFinal] = useState("");
  const [aulas, setAulas] = useState("");
  const [cupoMaximo, setCupoMaximo] = useState("");
  const [selectedPatrocinador, setSelectedPatrocinador] = useState("");
  const [patrocinadorData, setPatrocinadorData] = useState(null);
  const [juegoData, setJuegoData] = useState(null);

  useEffect(() => {
    if (rowData) {
      setSelectedJuego(rowData.selectedJuego || "");
      setEsEquipo(rowData.esEquipo || false);
      setHoraInicio(rowData.horaInicio || "");
      setHoraFinal(rowData.horaFinal || "");
      setAulas(rowData.aulas || "");
      setCupoMaximo(rowData.cupoMaximo || "");
      setSelectedPatrocinador(rowData.selectedPatrocinador || "");
    }
  }, [rowData]);

  useEffect(() => {
    const fetchPatrocinadorData = async () => {
      if (selectedPatrocinador) {
        try {
          const patrocinadorDoc = await getDoc(
            doc(db, "patrocinadores", selectedPatrocinador)
          );
          if (patrocinadorDoc.exists()) {
            setPatrocinadorData(patrocinadorDoc.data());
          } else {
            console.log("No se encontró el documento del patrocinador");
          }
        } catch (error) {
          console.error("Error al obtener datos del patrocinador:", error);
        }
      }
    };

    const fetchJuegoData = async () => {
      if (selectedJuego) {
        try {
          const juegoDoc = await getDoc(doc(db, "juegos", selectedJuego));
          if (juegoDoc.exists()) {
            setJuegoData(juegoDoc.data());
          } else {
            console.log("No se encontró el documento del juego");
          }
        } catch (error) {
          console.error("Error al obtener datos del juego:", error);
        }
      }
    };

    fetchPatrocinadorData();
    fetchJuegoData();
  }, [selectedPatrocinador, selectedJuego]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !selectedJuego ||
        !horaInicio ||
        !horaFinal ||
        !aulas ||
        !cupoMaximo ||
        !selectedPatrocinador
      ) {
        console.error("Por favor complete todos los campos obligatorios.");
        return;
      }

      if (rowData && rowData.id) {
        // Si hay datos de fila, estamos editando una competencia existente
        const competenciaRef = doc(db, "competencias", rowData.id);
        await updateDoc(competenciaRef, {
          selectedJuego: selectedJuego,
          imagenJuego: juegoData["imagen"],
          descripcionJuego: juegoData["descripcion"],
          esEquipo: esEquipo,
          horaInicio: horaInicio,
          horaFinal: horaFinal,
          aulas: aulas,
          cupoMaximo: cupoMaximo,
          selectedPatrocinador: selectedPatrocinador,
          premios: patrocinadorData["premios"],
        });
        alert("¡Competencia modificada con éxito!");
      } else {
        // Si no hay datos de fila, estamos creando una nueva competencia
        await addDoc(collection(db, "competencias"), {
          selectedJuego: selectedJuego,
          imagenJuego: juegoData["imagen"],
          descripcionJuego: juegoData["descripcion"],
          esEquipo: esEquipo,
          horaInicio: horaInicio,
          horaFinal: horaFinal,
          aulas: aulas,
          cupoMaximo: cupoMaximo,
          selectedPatrocinador: selectedPatrocinador,
          premios: patrocinadorData["premios"],
        });
        alert("¡Competencia agregada con éxito!");
      }
    } catch (error) {
      console.error("Error al guardar la competencia:", error);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-opacity-50 bg-gray-900">
      <div className="relative w-full max-w-xl mx-auto">
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
            <div className="flex flex-col md:flex-row p-4">
              <div className="flex flex-col md:w-1/2 md:mr-2 lg:mr-4">
                <div className="flex justify-between mb-4">
                  <div className="w-full pr-2 md:w-1/2 md:pr-1">
                    <label
                      htmlFor="horaInicio"
                      className="block mt-4 ml-3 mb-2 text-sm"
                    >
                      Juego:
                    </label>
                    <SelectorColecciones
                      coleccion={"juegos"}
                      onChange={(e) => setSelectedJuego(e.target.value)}
                    />
                  </div>
                  <div className="w-full pl-2 md:w-1/2 md:pl-1">
                    <label
                      htmlFor="horaInicio"
                      className="block ml-3 mt-4 mb-2 text-sm"
                    >
                      Patrocinador:
                    </label>
                    <SelectorColecciones
                      coleccion={"patrocinadores"}
                      onChange={(e) => setSelectedPatrocinador(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-full pr-2 md:w-1/2 md:pr-1">
                    <label
                      htmlFor="horaInicio"
                      className="block mt-4 mb-2 text-sm"
                    >
                      Fecha y Hora de Inicio:
                    </label>
                    <input
                      type="datetime-local"
                      id="horaInicio"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value={horaInicio}
                      onChange={(e) => setHoraInicio(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full pl-2 md:w-1/2 md:pl-1">
                    <label
                      htmlFor="horaFinal"
                      className="block mt-4 mb-2 text-sm"
                    >
                      Fecha y Hora de Finalización:
                    </label>
                    <input
                      type="datetime-local"
                      id="horaFinal"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value={horaFinal}
                      onChange={(e) => setHoraFinal(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-2 lg:ml-4 md:w-3/5">
                <div className="mb-4">
                  <label htmlFor="aulas" className="block mt-4 mb-2 text-sm">
                    Aula:
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
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cupoMaximo"
                    className="block mt-4 mb-2 text-sm"
                  >
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
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center p-4 border-t border-solid rounded-b border-blueGray-200">
              <div className="mb-4 mr-20 md:mb-0">
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
              </div>
              <div className="flex justify-end md:w-1/2">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FrmCompetencias;
