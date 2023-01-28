import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" to="/Home">
          <span className="text-danger">El</span>{" "}
          <span className="text-success">Chico</span>{" "}
          <span className="text-danger">Loco</span>
        </Navbar.Brand>
        <NavbarToggle className="bg-success" aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav>
            <Link className="text-warning text-decoration-none" to="Home">
              Home
            </Link>
            <Link className="text-warning text-decoration-none" to="Menu">
              Menu
            </Link>
            <Link className="text-warning text-decoration-none" to="Contact">
              Contact
            </Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
