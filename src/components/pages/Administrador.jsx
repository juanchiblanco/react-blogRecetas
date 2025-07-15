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
            <th>Duración</th>
            <th>URL de Imagen</th>
            <th>Dificultad</th>
            <th>Porciones</th>
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
              <Form.Control type="text" placeholder="Ej: Spaghetti a la boloñesa" />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDuracion">
              <Form.Label>Duración en minutos*</Form.Label>
              <Form.Control type="number" placeholder="Ej: 45" />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPorciones">
              <Form.Label>Cantidad de porciones*</Form.Label>
              <Form.Control type="number" placeholder="Ej: 4" />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://images.pexels.com/photos/116738/pexels-photo-116738.jpeg"
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
            <Form.Group className="mb-3" controlId="formIngredientes">
              <Form.Label>Ingredientes*</Form.Label>
              <div className="d-flex gap-1">
              <Form.Control
              className="w-75"
                type="text"
                placeholder="Ej: 300 g de carne picada de res."
              />
              <Button type="button" variant="primary" className="w-25">
              Agregar ingrediente
            </Button>
            </div>
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPasos">
              <Form.Label>Pasos a seguir*</Form.Label>
              <div className="d-flex gap-1">
              <Form.Control
              className="w-75"
                type="text"
                placeholder="Ej: Cocinar la pasta En una olla con agua hirviendo y sal, cocina los spaghetti según las instrucciones del paquete. Escúrrelos y resérvalos."
              />
              <Button type="button" variant="primary" className="w-25">
              Agregar paso
            </Button>
            </div>
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConsejo">
          <Form.Label>Consejo adicional</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Si quieres darle un sabor más profundo, puedes añadir un chorrito de vino tinto justo después de dorar la carne y dejar que se evapore antes de agregar el tomate."
            as="textarea"
           
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Administrador;
