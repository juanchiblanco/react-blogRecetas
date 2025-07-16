import { Button, ListGroup } from "react-bootstrap";

const ItemPaso = ({ paso, borrarPaso, indice }) => {
  return (
    <ListGroup.Item className="d-flex my-2 border-bottom border-light-subtle text-break">
      {indice}. {paso}
      <Button
      className="ms-auto btn-sm mb-2"
        type="button"
        variant="danger"
        onClick={() => borrarPaso(paso)}
      >
        <i class="bi bi-trash"></i>
      </Button>
    </ListGroup.Item>
  );
};

export default ItemPaso;
