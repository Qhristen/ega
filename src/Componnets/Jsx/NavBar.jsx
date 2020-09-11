import React from "react";
import {Navbar, Nav} from "react-bootstrap";
// import {Link} from "react-router-dom";
import logo from "../img/logo.svg";
import {Link} from "react-scroll";

const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg">
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
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={50}
            >
              <Nav.Link>HOME</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={50}
            >
              <Nav.Link>SKILLS</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="Services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={50}
            >
              <Nav.Link>SERVICES</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={50}
            >
              <Nav.Link>PORTFOLIO</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={50}
            >
              <Nav.Link>CONTACT</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
