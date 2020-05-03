import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';



 const NavBar = () => {

    return (
      <div>
        <Navbar fixed="top" className="m-3">
          <div className="container">
            <Link to={'/'}>
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

          </div>
        </Navbar>

        

      </div>

    )
  
}

export default NavBar;