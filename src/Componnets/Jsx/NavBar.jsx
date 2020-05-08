import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" className="m-3" collapseOnSelect expand="lg">
        <div className="container">
          <Link to={"/"}>
            <Navbar.Brand>
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Ega"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Profile">PROFILE</Nav.Link>
              <Nav.Link href="/Resume">EXPERIENCE</Nav.Link>{" "}
              <Nav.Link href="/portfolio" eventKey="third">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link href="/Contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
