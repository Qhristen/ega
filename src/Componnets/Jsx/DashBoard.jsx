import React from 'react';
import '../Css/DashBoard.css';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Profile from './Profile';
import { Tab, Tabs, Col, Nav, Row } from 'react-bootstrap';
// import SimpleBar from 'simplebar-react';


const DashPage = () => {
  return (
    <div className="container">

      <div className="T-top" fixed="top">

      <Tab.Container className="T-top" id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3} sticky="top" className="left-tabs">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">PROFILE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">RESUME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">PORTFOLIO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="forth">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <Profile />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Resume />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Portfolio />
        </Tab.Pane>
        <Tab.Pane eventKey="forth">
        <Contact />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>


{/* 
    <div className="containers fixed-top"  fixed="top">
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="profile" title="Profile" >
    <Profile />
  </Tab>
  <Tab eventKey="resume" title="Resume">
  <Resume />
  </Tab>
  <Tab eventKey="portfolio" title="Portfolio">
    <Portfolio />
  </Tab>
  <Tab eventKey="contact" title="Contact">
    <Contact />
  </Tab>
</Tabs>
    </div> */}
      </div>
  )
}

export default DashPage;