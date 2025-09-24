import { Container, Row } from "react-bootstrap";
import CardReceta from "./producto/CardReceta";
import { useEffect, useState } from "react";
import { leerRecetas } from "../../helpers/queries.js";

const Inicio = () => {
  const [listaRecetas, setListaRecetas] = useState([]);

  useEffect(() => {
      obtenerRecetas();
    }, []);

  const obtenerRecetas = async () => {
      const respuesta = await leerRecetas();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setListaRecetas(datos);
      } else {
        console.info("Ocurrio un error al buscar las recetas");
      }
    };

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
          {listaRecetas.map((receta) => (
            <CardReceta receta={receta} key={receta._id}></CardReceta>
          ))}
        </Row>
        {listaRecetas.length === 0 ? (
          <p className="text-center fs-5 mt-4">
            <i className="bi bi-x display-3"></i>
            <br></br>No hay recetas agregadas
          </p>
        ) : (
          <div className="d-flex justify-content-center mt-5">
          </div>
        )}
      </Container>
    </section>
  );
};

export default Inicio;
