import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaID, leerRecetas, leerRecetasPaginadas, obtenerRecetaID } from "../../../helpers/queries.js";

const ItemReceta = ({
  receta,
  fila,
  prepararModal,
  setListaRecetas,
  page,
  limit
}) => {

  const prepararEdicion = () =>{
    prepararModal(receta._id)
  }

  const eliminarReceta = () => {
    Swal.fire({
      title: "Eliminar receta",
      text: "No puedes revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#277a35ff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaID(receta._id)
        if (respuesta.status===200) {
          Swal.fire({
            title: "Receta eliminada!",
            text: `La receta de ${receta.formPlato} fue eliminada correctamente`,
            icon: "success",
          });
          const respuestaRecetas = await leerRecetasPaginadas(page, limit)
          const recetasActualizadas = await respuestaRecetas.json()
          setListaRecetas(recetasActualizadas.recetas)
        } else {
          Swal.fire({
            title: "Ocurrió un error!",
            text: `La receta de ${receta.formPlato} no pudo ser eliminada`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{receta.formPlato}</td>
      <td className="text-end">{receta.formDuracion}"</td>
      <td className="text-center">
        <img
          src={receta.formImagen}
          className="w-25 overflow-hidden"
          alt={receta.formPlato}
        ></img>
      </td>
      <td>{receta.formDificultad}</td>
      <td className="text-center">
        <div className="d-flex gap-1">
          <Button variant="warning" className="me-lg-2" onClick={prepararEdicion}>
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger" onClick={eliminarReceta}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
