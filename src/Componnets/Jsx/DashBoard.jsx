import React from "react";
import "../Css/DashBoard.css";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import { Tab, Col, Nav, Row } from "react-bootstrap";

// import SimpleBar from 'simplebar-react';

const DashPage = () => {
  const key = [1, 2, 3, 4];
  return (
    <div className="container">
      <div className="T-top" fixed="top">
        <Tab.Container
          className="T-top"
          id="left-tabs-example"
          defaultActiveKey={key[0]}
        >
          <Row>
            <Col sm={3} sticky="top" className="left-tabs">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey={key[0]}>PROFILE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={key[1]}>EXPERIENCE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={key[2]}>PORTFOLIO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={key[3]}>CONTACT</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey={key[0]}>
                  <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey={key[1]}>
                  <Resume />
                </Tab.Pane>
                <Tab.Pane eventKey={key[2]}>
                  <Portfolio />
                </Tab.Pane>
                <Tab.Pane eventKey={key[3]}>
                  <Contact />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default DashPage;
