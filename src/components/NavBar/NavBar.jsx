import React from 'react';
import {Link} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../../logo.svg';

export const NavBar = () => {
    return (
        <Navbar expand="lg" sticky="top">
          <Navbar.Brand to="/" className="cursor-pointer">   
            <Link exact activeClassName="active" className="nav-link" to="/" >
              <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Comercializadora Don Jaime"/>
            </Link>   
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link exact activeClassName="active" className="nav-link" to="/" >Inicio</Link>
              <Link exact activeClassName="active" className="nav-link" to="/Products" >Nuestros Productos</Link>
              <Link exact activeClassName="active" className="nav-link" to="/Recepi" >Recetas</Link>
              <Link exact activeClassName="active" className="nav-link" to="/Contact" >Contactenos</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}
