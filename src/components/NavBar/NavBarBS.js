import React from 'react'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import brightlogo from '../../assets/images/material-symbols_menu-book-outline.png'

function NavBar() {
  return (
    <Navbar className='navbar' expand="lg">
      <Container fluid>
        <div className='brightstream-icon-container' >
          <img src={brightlogo} alt="BS-logo" ></img>
        </div>
        <Navbar.Brand as={Link} to="/" className='nav-brand' >BrightStream</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="nav-bar-options">
            <Nav.Link as={Link} to="/Class" id="class-option" >Class</Nav.Link>
            <Nav.Link as={Link} to="/Schedule" id='schedule-option'>Schedule</Nav.Link>
            <Nav.Link as={Link} to="/Collaborate" id='collaborate-option' >Collaborate</Nav.Link>
            <Nav.Link as={Link} to="/Quiz" id='quiz-option' >Quiz</Nav.Link>
            <Nav.Link as={Link} to="/Privacy" id='privacy-option' >Privacy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <Nav.Link id="login-option" href="#Login">Login</Nav.Link>
          <div className='navbar-gs-component'>
              <rect id="gs-rect" ></rect>
              <Nav.Link id="gs-option" href="#GetStarted">
                Get Started
              </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
