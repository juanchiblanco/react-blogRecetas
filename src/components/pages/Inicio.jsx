import { Container } from "react-bootstrap";

const Inicio = () => {
  return (
    <section>
      <article>
        <img
          className="imgBanner opacity-50"
          src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
          alt="Plato de comida"
        />
      </article>
        <Container className="my-5">
        <h1 className="display-4 text-center">Nuestras Recetas, tu tranquilidad</h1>
        <p className="raleway text-center"><strong>Ya seas principiante o chef</strong>, aquí encontrarás algo para ti.</p>
        <hr />
        <h4 className="mt-5">Explora una colección de recetas fáciles, sabrosas y para todos los niveles.</h4>
        </Container>
    </section>
  );
};

export default Inicio;
