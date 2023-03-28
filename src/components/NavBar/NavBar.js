import React from 'react'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" >BrightStream</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Class" >Class</Nav.Link>
            <Nav.Link as={Link} to="/Schedule">Schedule</Nav.Link>
            <Nav.Link as={Link} to="/Collaborate">Collaborate</Nav.Link>
            <Nav.Link as={Link} to="/Quiz">Quiz</Nav.Link>
            <Nav.Link as={Link} to="/Privacy">Privacy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <Nav.Link href="#Login">Login</Nav.Link>
          <Nav.Link href="#GetStarted">Get Started</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;