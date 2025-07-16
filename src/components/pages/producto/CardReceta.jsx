import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";

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
          <Card.Title className="text-center tinos fs-4">{receta.formPlato}</Card.Title>
          <hr />
          <Card.Text className="text-center raleway">
            {receta.formDescripcionBreve} <br className="mb-2" />
          </Card.Text>
          <div className="d-flex justify-content-around bg-dark-subtle p-3">
            <div>
              <Card.Text>Duración</Card.Text>
            <Card.Text className="fw-bold text-warning text-center">{receta.formDuracion}"</Card.Text>
            </div>
            <div>
              <Card.Text>Dificultad</Card.Text>
            <Card.Text className="fw-bold text-warning text-center">{receta.formDificultad}</Card.Text>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">
          <Link variant="success" className="w-50 btn btn-success" to={`/detalle.html?id=${receta.id}`}>
            Ver receta
          </Link>
        </Card.Footer>
      </Card>
    </Col>
    );
};

export default CardReceta;