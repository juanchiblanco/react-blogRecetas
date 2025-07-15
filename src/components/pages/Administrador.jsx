import { Button, Table } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const Administrador = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (receta) => {
    console.log(receta);
  };

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
      <Modal show={show}>
        <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formPlato">
              <Form.Label>Plato*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Spaghetti a la boloñesa"
                {...register("formPlato", {
                  required: "El nombre del plato es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message:
                      "El nombre del plato debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "El nombre del plato debe tener como maximo 100 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.formPlato?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDuracion">
              <Form.Label>Duración en minutos*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 45"
                {...register("formDuracion", {
                  required: "La duración es un valor obligatorio",
                  min: {
                    value: 5,
                    message:
                      "La duración mínima del plato debe ser de al menos 5 min.",
                  },
                  max: {
                    value: 480,
                    message:
                      "La duración máxima del plato debe ser de hasta 480 min. (8 hrs).",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.formDuracion?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPorciones">
              <Form.Label>Cantidad de porciones*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 4"
                {...register("formPorciones", {
                  required: "La cantidad de porciones es un valor obligatorio",
                  min: {
                    value: 1,
                    message:
                      "La cantidad de porciones mínima de la receta debe ser de al menos 1 porción.",
                  },
                  max: {
                    value: 10,
                    message:
                      "La cantidad de porciones máxima de la receta debe ser de hasta 10 porciones.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.formPorciones?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://images.pexels.com/photos/116738/pexels-photo-116738.jpeg"
                {...register("formImagen", {
                  required: "La url de la imagen es un dato obligatorio",
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
                    message:
                      "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.formImagen?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDificultad">
              <Form.Label>Dificultad*</Form.Label>
              <Form.Select
                {...register("formDificultad", {
                  required: "Debe seleccionar una categoria",
                })}
              >
                <option value="">Seleccione una opcion</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.formDificultad?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIngredientes">
              <Form.Label>Ingredientes*</Form.Label>
              <div className="d-flex gap-1">
                <Form.Control
                  className="w-75"
                  type="text"
                  placeholder="Ej: 300 g de carne picada de res."
                  {...register("formIngredientes", {
                    required: "La receta debe contener al menos un ingrediente",
                    minLength: {
                      value: 2,
                      message:
                        "El ingrediente debe tener al menos 2 caracteres",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "El ingrediente debe tener como maximo 100 caracteres",
                    },
                  })}
                />
                <Button type="button" variant="primary" className="w-25">
                  Agregar ingrediente
                </Button>
              </div>
              <Form.Text className="text-danger">
                {errors.formIngredientes?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPasos">
              <Form.Label>Pasos a seguir*</Form.Label>
              <div className="d-flex gap-1">
                <Form.Control
                  className="w-75"
                  type="text"
                  placeholder="Ej: Cocinar la pasta En una olla con agua hirviendo y sal, cocina los spaghetti según las instrucciones del paquete. Escúrrelos y resérvalos."
                  {...register("formPasos", {
                    required: "La receta debe contener al menos un paso",
                    minLength: {
                      value: 2,
                      message: "El paso debe tener al menos 2 caracteres",
                    },
                    maxLength: {
                      value: 200,
                      message: "El paso debe tener como maximo 200 caracteres",
                    },
                  })}
                />
                <Button type="button" variant="primary" className="w-25">
                  Agregar paso
                </Button>
              </div>
              <Form.Text className="text-danger">
                {errors.formPasos?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTip">
              <Form.Label>Tip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Si quieres darle un sabor más profundo, puedes añadir un chorrito de vino tinto justo después de dorar la carne y dejar que se evapore antes de agregar el tomate."
                as="textarea"
                {...register("formTip", {
                  minLength: {
                    value: 2,
                    message: "El tip debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 300,
                    message: "El tip debe tener como maximo 300 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.formTip?.message}
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </section>
  );
};

export default Administrador;
