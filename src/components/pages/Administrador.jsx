import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { datosPrueba } from "../../data/datosPrueba";
import { v4 as uuidv4 } from 'uuid';
import ItemProducto from "./producto/ItemProducto";

const Administrador = () => {
  const recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ingrediente, setIngrediente] = useState("");
  const [paso, setPaso] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [pasos, setPasos] = useState([]);
  const [recetas, setRecetas] = useState(recetasLocalStorage);

  useEffect(() => {
    localStorage.setItem("recetas", JSON.stringify(recetas));
  }, [recetas]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const cargarRecetasPrueba = () => {
    setRecetas(datosPrueba)
  }

  const onSubmit = (receta) => {
    if (ingredientes.length === 0 || pasos.length === 0) {
      Swal.fire({
        title: "Faltan datos",
        text: "Debes agregar al menos un ingrediente y un paso",
        icon: "error",
      });
      return;
    }

    receta.id = uuidv4()

    const recetaCompleta = {
      ...receta,
      ingredientes,
      pasos,
    };

    setRecetas([...recetas, recetaCompleta]);

    Swal.fire({
  title: "Receta agregada!",
  text: `La receta de ${receta.formPlato} fue agregada correctamente.`,
  icon: "success"
});

    reset();
    setIngredientes([]);
    setPasos([]);
    setIngrediente("");
    setPaso("");
    handleClose();
  };

  const agregarIngrediente = () => {
    if (ingredientes.length === 0) {
      setIngredientes([ingrediente]);
    } else {
      setIngredientes([...ingredientes, ingrediente]);
    }
    Swal.fire({
      title: "Quieres agregar otro ingrediente?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agregar otro ingrediente",
      cancelButtonText: "No quiero agregar mas",
    }).then((result) => {
      if (result.isConfirmed) {
        setIngrediente("");
      }
    });
  };

  const agregarPaso = () => {
    if (pasos.length === 0) {
      setPasos([paso]);
    } else {
      setPasos([...pasos, paso]);
    }
    Swal.fire({
      title: "Quieres agregar otro paso?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agregar otro paso",
      cancelButtonText: "No quiero agregar mas",
    }).then((result) => {
      if (result.isConfirmed) {
        setPaso("");
      }
    });
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
            <i className="bi bi-database-fill-add" onClick={cargarRecetasPrueba}></i>
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
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            recetas.map((receta, indice)=> <ItemProducto key={receta.id} receta={receta} fila={indice + 1}></ItemProducto>)
          }
        </tbody>
      </Table>
      <Modal show={show}>
        <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar receta</Modal.Title>
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
                  value={ingrediente}
                  onChange={(e) => setIngrediente(e.target.value)}
                />
                <Button
                  type="button"
                  variant="primary"
                  className="w-25"
                  onClick={agregarIngrediente}
                >
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
                  value={paso}
                  onChange={(e) => setPaso(e.target.value)}
                />
                <Button
                  type="button"
                  variant="primary"
                  className="w-25"
                  onClick={agregarPaso}
                >
                  Agregar paso
                </Button>
              </div>
              <Form.Text className="text-danger">
                {errors.formPasos?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcionBreve">
              <Form.Label>Descripcion breve*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Pasta clásica italiana con carne y salsa de tomate."
                as="textarea"
                {...register("formDescripcionBreve", {
                  required: "La descripcion breve es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message: "La descripcion breve debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message: "El tip debe tener como maximo 100 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.formDescripcionBreve?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcionAmplia">
              <Form.Label>Descripcion amplia*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Una receta tradicional y reconfortante de la cocina italiana. Ideal para compartir en familia. Los sabores de la carne y el tomate se mezclan a la perfección con la textura al dente de los spaghetti."
                as="textarea"
                {...register("formDescripcionAmplia", {
                  required: "La descripcion amplia es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message: "La descripcion amplia debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 300,
                    message: "La descripcion amplia debe tener como maximo 300 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.formDescripcionAmplia?.message}
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
