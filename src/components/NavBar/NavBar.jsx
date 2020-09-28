import React from 'react';
import {Link} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../../assets/img/Logo.png';

export const NavBar = () => {
    return (
        <Navbar expand="lg" sticky="top" className="bg-white">
          <Navbar.Brand to="/" className="cursor-pointer">   
            <Link activeclassname="active" className="nav-link" to="/" >
              <img src={logo} width="" height="40" className="d-inline-block align-top" alt="Comercializadora Don Jaime"/>
            </Link>   
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link exact activeclassname="active" className="nav-link" to="/" >Inicio</Link>
              <Link exact activeclassname="active" className="nav-link" to="/Products" >Nuestros Productos</Link>
              <Link exact activeclassname="active" className="nav-link" to="/Recepi" >Recetas</Link>
              <Link exact activeclassname="active" className="nav-link" to="/Contact" >Contactenos</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}
