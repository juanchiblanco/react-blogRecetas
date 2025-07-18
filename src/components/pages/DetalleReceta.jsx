import { useState, useEffect } from "react";
import { Container, Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router";
import ItemIngrediente from "./producto/ItemIngrediente";

const DetalleReceta = () => {
  const recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];
  const { id } = useParams();

  const [recetaBuscada, setRecetaBuscada] = useState("");
  const [detalleIngredientes, setDetalleIngredientes] = useState([])
  const [detallePasos, setDetallePasos] = useState([])

  useEffect(() => {
    const recetaEncontrada = recetasLocalStorage.find(
      (itemReceta) => itemReceta.id === id
    );
    setRecetaBuscada(recetaEncontrada);
    setDetalleIngredientes(recetaEncontrada.ingredientes);
    setDetallePasos(recetaEncontrada.pasos);
  }, []);

  return (
    <Container className="my-3">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              src={recetaBuscada.formImagen}
              alt={recetaBuscada.formPlato}
              className="d-none d-md-block img-fluid shadow ms-1 mt-1"
            />
            <Card.Text className="px-2 ms-1 lead text-center my-3 tinos bg-light-subtle rounded shadow">
                  {recetaBuscada.formDescripcionAmplia}"
                </Card.Text>
          </Col>
          <Col md={6}>
            <Card.Body>
              <div className="d-flex">
                <Card.Title className="tinos fs-2">
                  {recetaBuscada.formPlato}
                </Card.Title>
                <Card.Text className="ms-auto display-6">
                  {recetaBuscada.formDuracion}"
                </Card.Text>
              </div>
              <hr />
              <Card.Text className="text-warning raleway text-center">
                Dificultad: {recetaBuscada.formDificultad}
              </Card.Text>
              <Card.Text className="text-warning raleway text-center">
                Porciones: {recetaBuscada.formPorciones}
              </Card.Text>
              <hr />
              <Card.Text className="raleway mt-3">Ingredientes</Card.Text>
              <ListGroup>
                {detalleIngredientes.map(((ingrediente, indice) => (
                      <ListGroup.Item
                        key={indice}
                      >{ingrediente}</ListGroup.Item>
                    )))}
              </ListGroup>
              <Card.Text className="raleway mt-3">Pasos</Card.Text>
              <ListGroup>
                {detallePasos.map(((paso, indice) => (
                      <ListGroup.Item
                        key={indice}
                      >{indice+1}. {paso}</ListGroup.Item>
                    )))}
              </ListGroup>
              <Card.Text className="my-4 text-center bg-dark-subtle p-2 rounded">
                Consejo Adicional: Si quieres darle un sabor más profundo,
                puedes añadir un chorrito de vino tinto justo después de dorar
                la carne y dejar que se evapore antes de agregar el tomate.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
