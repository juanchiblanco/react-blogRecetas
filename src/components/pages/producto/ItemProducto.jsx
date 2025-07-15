import { Button } from "react-bootstrap";

const ItemProducto = () => {
    return (
        <tr>
      <td className="text-center">1</td>
      <td>Fideos</td>
      <td className="text-end">90"</td>
      <td className="text-center">
        <img
          src="https://images.pexels.com/photos/116725/pexels-photo-116725.jpeg"
          className="w-25 overflow-hidden"
          alt="Fideos"
        ></img>
      </td>
      <td>Baja</td>
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