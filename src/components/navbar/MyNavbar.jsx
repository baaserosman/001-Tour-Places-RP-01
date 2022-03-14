import React from "react";
import "./MyNavbar.css";

import { Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar className="container-fluid p-0 bg-dark text-warning d-flex justify-content-center ">
      <Nav style={{ color: "white" }}>
        <Nav.Link href="#about us">ABOUT US</Nav.Link>
        <Nav.Link href="#foryou">FOR YOU</Nav.Link>
        <Nav.Link href="#services">SERVICES</Nav.Link>
        <Nav.Link href="#blok">BLOK</Nav.Link>
        <Nav.Link href="#vlog">VLOG</Nav.Link>
        <Nav.Link href="#contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
