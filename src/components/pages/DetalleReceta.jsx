import { useState, useEffect } from "react";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { obtenerRecetaID } from "../../helpers/queries";

const DetalleReceta = () => {
  useEffect(() => {
    obtenerReceta();
  }, []);

  const { id } = useParams();

  const [receta, setReceta] = useState('');

  const obtenerReceta = async () => {
    const respuesta = await obtenerRecetaID(id);
    if (respuesta.status === 200) {
      const receta = await respuesta.json();
      setReceta(receta);
    } else {
      console.info("Ocurrio un error al buscar la receta");
    }
  };

  return (
    <Container className="my-3">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              src={receta.formImagen}
              alt={receta.formPlato}
              className="d-none d-md-block img-fluid shadow ms-1 mt-1"
            />
            <Card.Text className="px-2 ms-1 lead text-center my-3 tinos bg-light-subtle rounded shadow">
              {receta.formDescripcionAmplia}
            </Card.Text>
          </Col>
          <Col md={6}>
            <Card.Body>
              <div className="d-flex">
                <Card.Title className="tinos fs-2">
                  {receta.formPlato}
                </Card.Title>
                <Card.Text className="ms-auto display-6">
                  {receta.formDuracion}"
                </Card.Text>
              </div>
              <hr />
              <Card.Text className="text-warning raleway text-center">
                Dificultad: {receta.formDificultad}
              </Card.Text>
              <Card.Text className="text-warning raleway text-center">
                Porciones: {receta.formPorciones}
              </Card.Text>
              <hr />
              <Card.Text className="raleway mt-3">Ingredientes</Card.Text>
              <ListGroup>
                {receta?.ingredientes?.map((ingrediente, indice) => (
                  <ListGroup.Item key={indice}>{ingrediente}</ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Text className="raleway mt-3">Pasos</Card.Text>
              <ListGroup>
                {receta?.pasos?.map((paso, indice) => (
                  <ListGroup.Item key={indice}>
                    {indice + 1}. {paso}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Text className="my-4 text-center bg-dark-subtle p-2 rounded">
                Consejo Adicional: {receta.formTip}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
