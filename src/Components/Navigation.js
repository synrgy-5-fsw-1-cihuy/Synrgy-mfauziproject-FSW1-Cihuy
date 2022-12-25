import {Container, Nav, Navbar} from 'react-bootstrap';
import{
    BrowserRouter, NavLink
  } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="binar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Binar Rental Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Our Services</Nav.Link>
            <Nav.Link href="#whyus">Why Us</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>


        

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;