import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../../public/logoCocina.png";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registro } from "../../helpers/queries.js";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logOut = () => {
    Swal.fire({
      title: "Tu sesión se está por cerrar",
      text: "Estás seguro de esto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesión cerrada",
          text: "Nos vemos la próxima.",
        });
        setUsuarioAdmin({});
        navegacion("/");
      }
    });
  };

  const crearCuenta = async (usuario) => {
    const respuesta = await registro(usuario);

    if (respuesta.status === 201) {
      Swal.fire({
        title: "Registro exitoso",
        text: `Bienvenido ${usuario.email}`,
        icon: "success",
      });
      navegacion("/login");
      handleClose();
    } else {
      Swal.fire({
        title: "Error al registrarse",
        text: `Credenciales incorrectas`,
        icon: "error",
      });
    }
  };

  return (
    <Navbar
      expand="lg"
      className="bg-dark-subtle border-bottom border-black-subtle raleway"
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <div className="d-flex gap-2 mt-2">
            <img
              src={logo}
              alt="logo TuReceta"
              className="img-fluid"
              width={50}
            />
            <p className="lead fs-4 mt-3">TuReceta</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            {usuarioAdmin.token ? (
              <>
                <NavLink className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button
                  className="nav-link text-start botonLogout"
                  onClick={logOut}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to={"/login"}>
                  Login
                </NavLink>
                <Button
                  className="nav-link text-start botonLogout"
                  onClick={handleShow}
                >
                  Crea tu cuenta
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="raleway" onSubmit={handleSubmit(crearCuenta)}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juanperez@mail.com"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe tener un formato valido, por ejemplo juanperez@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa una contraseña"
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Crear cuenta
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default Menu;
