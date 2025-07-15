import { Button } from "react-bootstrap";

const ItemProducto = ({receta, fila}) => {
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
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemProducto;