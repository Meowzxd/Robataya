import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Robataya</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sushi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Set Meals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Promotions</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
