import { Button, ListGroup } from "react-bootstrap";

const ItemIngrediente = ({ ingrediente, borrarIngrediente }) => {
  return (
    <ListGroup.Item className="d-flex my-2">
      {ingrediente}
      <Button
      className="ms-auto btn-sm"
        type="button"
        variant="danger"
        onClick={() => borrarIngrediente(ingrediente)}
      >
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemIngrediente;
