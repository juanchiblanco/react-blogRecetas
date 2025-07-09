import { Button, Table } from "react-bootstrap";

const Administrador = () => {
    return (
        <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 tinos">Mis Recetas</h1>
        <div>
        <Button className="btn btn-success" >
          <i className="bi bi-file-earmark-plus"></i>
        </Button>
        <Button className="btn btn-info ms-2" >
          <i className="bi bi-database-fill-add"></i>
        </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover className="raleway">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Receta</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Nivel</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </section>
    );
};

export default Administrador;