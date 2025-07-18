import { Container, Row } from "react-bootstrap";
import CardReceta from "./producto/CardReceta";
import Paginacion from "./Paginacion";

const Inicio = () => {
  const recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];

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
        <h1 className="display-4 text-center">
          Nuestras Recetas, tu tranquilidad
        </h1>
        <p className="raleway text-center">
          <strong>Ya seas principiante o chef</strong>, aquí encontrarás lo que
          buscas.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <i className="bi bi-star-fill text-warning fs-3"></i>
          <i className="bi bi-star-fill text-warning fs-3"></i>
          <i className="bi bi-star-fill text-warning fs-3"></i>
          <i className="bi bi-star-fill text-warning fs-3"></i>
          <i className="bi bi-star-fill text-warning fs-3"></i>
        </div>
        <hr />
        <h4 className="mt-5" id="explorar">
          Explora una colección de recetas fáciles, sabrosas y para todos los
          niveles.
        </h4>
        <Row>
          {recetasLocalStorage.map((receta) => (
            <CardReceta receta={receta} key={receta.id}></CardReceta>
          ))}
        </Row>
        {recetasLocalStorage.length === 0 ? (
          <p className="text-center fs-5 mt-4">
            <i className="bi bi-x display-3"></i>
            <br></br>No hay recetas agregadas
          </p>
        ) : (
          <div className="d-flex justify-content-center mt-5">
            <Paginacion></Paginacion>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Inicio;
