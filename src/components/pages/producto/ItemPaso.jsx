import { Button, ListGroup } from "react-bootstrap";

const ItemPaso = ({ paso, borrarPaso, indice }) => {
  return (
    <ListGroup.Item className="d-flex my-2">
      {indice}. {paso}
      <Button
      className="ms-auto btn-sm"
        type="button"
        variant="danger"
        onClick={() => borrarPaso(paso)}
      >
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemPaso;
