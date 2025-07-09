import { Button, Table } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Administrador = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 tinos">Mis Recetas</h1>
        <div>
          <Button className="btn btn-success" onClick={handleShow}>
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
          <Button className="btn btn-info ms-2">
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
        <tbody></tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="my-4">
            <Form.Group className="mb-3" controlId="formPlato">
              <Form.Label>Plato*</Form.Label>
              <Form.Control type="text" placeholder="Ej: Cafe" />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDuracion">
              <Form.Label>Duración en minutos*</Form.Label>
              <Form.Control type="number" placeholder="Ej: 50" />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDificultad">
              <Form.Label>Categoría*</Form.Label>
              <Form.Select>
                <option value="">Seleccione una opcion</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </Form.Select>
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIngrediente">
              <Form.Label>Ingredientes*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Una taza de café suave y aromático."
                as="textarea"
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPasos">
              <Form.Label>Pasos a seguir*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
                as="textarea"
                rows={4}
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Button type="submit" variant="success">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Administrador;
