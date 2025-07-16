import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../../public/logoCocina.png";
import Swal from "sweetalert2";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();

  const logOut = () => {
    Swal.fire({
  title: "Tu sesión se está por cerrar",
  text: "Estás seguro de esto?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Cerrar sesión",
  cancelButtonText: "Cancelar"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Sesión cerrada",
      text: "Nos vemos la próxima.",
    });
    setUsuarioAdmin(false);
    sessionStorage.removeItem("userKey");
    navegacion("/");
  }
});
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
            {usuarioAdmin ? (
              <>
                <NavLink className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button className="nav-link text-start botonLogout" onClick={logOut}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink className="nav-link" to={"/login"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
