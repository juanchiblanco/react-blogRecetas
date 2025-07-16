import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../../public/logoCocina.png";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();

  const logOut = () => {
    setUsuarioAdmin(false);
    sessionStorage.removeItem("userKey");
    navegacion("/");
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
                <Button className="nav-link" onClick={logOut}>
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
