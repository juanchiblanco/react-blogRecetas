import { Col, Card, Button } from "react-bootstrap";

const CardReceta = ({receta}) => {
    return (
        <Col md={4} lg={3} className="my-3">
      <Card className="h-100 shadow">
        <div className="h-100">
          <img
            src={receta.formImagen}
            alt={receta.formPlato}
            className="img-fluid"
          />
        </div>
        <Card.Body className="h-100">
          <Card.Title className="primary-font text-center tinos">{receta.formPlato}</Card.Title>
          <Card.Text className="text-center raleway">
            {receta.formDescripcionBreve} <br className="mb-2" />
          </Card.Text>
          <Card.Text className="fw-bold text-warning text-center">{receta.formDificultad}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="success" className="w-50">
            Ver más
          </Button>
        </Card.Footer>
      </Card>
    </Col>
    );
};

export default CardReceta;