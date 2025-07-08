import { Col, Card, Button } from "react-bootstrap";

const CardReceta = () => {
    return (
        <Col md={4} lg={3} className="my-3">
      <Card className="h-100 shadow">
        <div>
          <img
            src="https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg"
            alt="spaghetti a la bolognesa"
            className="img-fluid"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font text-center tinos">Spaghetti a la bolognesa</Card.Title>
          <Card.Text className="text-center raleway">
            Un clásico italiano elaborado con pasta y una salsa rica a base de carne picada, tomate, cebolla y especias. Es una receta fácil de preparar y perfecta para compartir en familia. <br className="mb-2" />
          </Card.Text>
          <Card.Text className="fw-bold text-warning text-center">Dificultad: Media</Card.Text>
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