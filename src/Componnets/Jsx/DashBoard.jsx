import React, { useState } from 'react';
import '../Css/DashBoard.css';
import Particles from 'react-particles-js';
import Services from './Services';
import Works from './Works';
import Experience from './Experience';
import Skills from './Skills';
import { NavLink } from 'react-router-dom';
import { Row, Col, ListGroup } from 'react-bootstrap';
// import SimpleBar from 'simplebar-react';


const paticlesOpt = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 900
      }

    }
  }

}


const DashPage = () => {
  const [scroll, setScroll] = useState();

  const handleScroll = () => {
    setScroll(
      <Experience />
    );
  };
  return (
    <div>



      <Row>
        <Col sm={3} className="col-color">
          <div className="pat-prop">
            <Particles params={paticlesOpt} />
          </div>
          <div className="list-prop">
          <NavLink className="list-group-item list-group-item-action list" to="/">Home</NavLink>
          <a className="list-group-item list-group-item-action list" href="#Services">About</a>
          <a className="list-group-item list-group-item-action list" href="#Services">Services</a>
          <a className="list-group-item list-group-item-action" href="#Work">My Works</a>
          <a className="list-group-item list-group-item-action" href="#Experience">Experience</a>
          <a className="list-group-item list-group-item-action" href="#Skills">Skills</a>
          <a className="list-group-item list-group-item-action list" href="#Services">Contact</a>
        </div>
          
        </Col>
        <Col sm={9} className="col-props">
        <div className="container">
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            <div id="Services"> <Services /> </div>
            <p>...</p>
            <div id="Work"><Works /></div>
            <p>...</p>
            <div id="Experience"> <Experience /> </div>
            <p>...</p>
            <div id="Skills"> <Skills /> </div>
            <p>...</p>
          </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DashPage;