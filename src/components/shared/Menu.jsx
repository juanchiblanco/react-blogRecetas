import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom border-black-subtle" data-bs-theme="light">
      <Container>
        <Navbar.Brand  href="/">
            <div className="d-flex gap-2 mt-2">
                <p className="lead fs-4">TuReceta</p>
                <i className="bi bi-fork-knife mt-1"></i>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link">Inicio</NavLink>
            <NavLink className="nav-link">Administrador</NavLink>
            <Button className="nav-link">Logout</Button>
            <NavLink className="nav-link">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
