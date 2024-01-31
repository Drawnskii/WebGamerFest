/* Importación de estilos css */
import "../css/background.css";

/* Importación de componentes */
import DataTable from "../../components/DataTable";

function Contenedor() {
  return (
    <div className="rounded-lg m-2 glass sombra p-2 h-full">
      <div className="bg-light-purple p-1 rounded-md h-full">
        <DataTable nombreColeccion={"usuarios"}></DataTable>
      </div>
    </div>
  );
}

export default Contenedor;
