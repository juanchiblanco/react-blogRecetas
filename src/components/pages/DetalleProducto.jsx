import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleProducto = () => {
    return (
        <Container className="my-3">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              src="https://images.pexels.com/photos/4353607/pexels-photo-4353607.jpeg"
              className="d-none d-md-block img-fluid"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
                <div className="d-flex">
              <Card.Title className="tinos fs-2">Spaghetti a la Boloñesa</Card.Title>
              <Card.Text className="ms-auto display-6">45"</Card.Text>
              </div>
              <hr />
              <Card.Text className="text-warning raleway text-center">
                Dificultad: Fácil
              </Card.Text>
              <Card.Text className="text-warning raleway text-center">
                Porciones: 4
              </Card.Text>
              <hr />
              <Card.Text className="raleway">
                Ingredientes
              </Card.Text>
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
              <Card.Text className="raleway">
                Pasos
              </Card.Text>
              <ol className="my-2 raleway">
                    <li className="mt-3">Cocinar la pasta
En una olla con agua hirviendo y sal, cocina los spaghetti según las instrucciones del paquete. Escúrrelos y resérvalos.</li>
                    <li className="mt-3">Preparar la salsa
En una sartén grande, calienta el aceite de oliva a fuego medio. Agrega la cebolla y el ajo, y sofríe hasta que estén blandos y fragantes.</li>
                    <li className="mt-3">Agregar la carne
Añade la carne picada y cocínala hasta que esté completamente dorada, deshaciéndola con una cuchara de madera para evitar grumos.</li>
                    <li className="mt-3">Incorporar el tomate
Agrega el tomate triturado y el puré de tomate (si usas). Salpimienta al gusto. Añade orégano o albahaca si te gusta el toque herbal.</li>
                    <li className="mt-3">Cocinar a fuego lento
Reduce el fuego y deja cocinar la salsa durante unos 20–25 minutos, revolviendo ocasionalmente.</li>
                    <li className="mt-3">Servir
Sirve la pasta caliente con la salsa boloñesa por encima y espolvorea queso parmesano al gusto.</li>
                    <li className="mt-3">2 cucharadas de aceite de oliva.</li>
                </ol>
              <Card.Text className="my-4 text-center bg-dark-subtle p-2 rounded">
                Consejo Adicional: Si quieres darle un sabor más profundo, puedes añadir un chorrito de vino tinto justo después de dorar la carne y dejar que se evapore antes de agregar el tomate.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
    );
};

export default DetalleProducto;