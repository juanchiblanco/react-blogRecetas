import { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router";

const DetalleReceta = () => {
  const recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];
  const { id } = useParams();

  const [recetaBuscada, setRecetaBuscada] = useState("");

  useEffect(() => {
    const recetaEncontrada = recetasLocalStorage.find(
      (itemReceta) => itemReceta.id === id
    );
    setRecetaBuscada(recetaEncontrada);
    console.log(recetaBuscada);
  }, []);

  return (
    <Container className="my-3">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              src={recetaBuscada.formImagen}
              alt={recetaBuscada.formPlato}
              className="d-none d-md-block img-fluid"
            />
            <Card.Text className="px-2 lead text-center my-3 tinos bg-light-subtle rounded shadow">
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
              <Card.Text className="raleway">Ingredientes</Card.Text>
              <ul className="my-2 raleway">
                <li>400 g de spaghetti</li>
                <li>300 g de carne picada de res</li>
                <li>1 cebolla mediana</li>
                <li>2 dientes de ajo</li>
                <li>400 g de tomate triturado</li>
                <li>2 cucharadas de puré de tomate</li>
                <li>2 cucharadas de aceite de oliva</li>
                <li>Sal y pimienta al gusto</li>
                <li>Orégano seco o albahaca</li>
                <li>Queso parmesano rallado</li>
              </ul>
              <hr />
              <Card.Text className="raleway">Pasos</Card.Text>
              <ol className="my-2 raleway">
                <li className="mt-3">
                  Cocinar la pasta En una olla con agua hirviendo y sal, cocina
                  los spaghetti según las instrucciones del paquete. Escúrrelos
                  y resérvalos.
                </li>
                <li className="mt-3">
                  Preparar la salsa En una sartén grande, calienta el aceite de
                  oliva a fuego medio. Agrega la cebolla y el ajo, y sofríe
                  hasta que estén blandos y fragantes.
                </li>
                <li className="mt-3">
                  Agregar la carne Añade la carne picada y cocínala hasta que
                  esté completamente dorada, deshaciéndola con una cuchara de
                  madera para evitar grumos.
                </li>
                <li className="mt-3">
                  Incorporar el tomate Agrega el tomate triturado y el puré de
                  tomate (si usas). Salpimienta al gusto. Añade orégano o
                  albahaca si te gusta el toque herbal.
                </li>
                <li className="mt-3">
                  Cocinar a fuego lento Reduce el fuego y deja cocinar la salsa
                  durante unos 20–25 minutos, revolviendo ocasionalmente.
                </li>
                <li className="mt-3">
                  Servir Sirve la pasta caliente con la salsa boloñesa por
                  encima y espolvorea queso parmesano al gusto.
                </li>
                <li className="mt-3">2 cucharadas de aceite de oliva.</li>
              </ol>
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
