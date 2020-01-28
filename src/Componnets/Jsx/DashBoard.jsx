import React from 'react';
import '../Css/DashBoard.css';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Profile from './Profile';
import { Tab, Tabs } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';


const DashPage = () => {
  return (
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
    </div>
  )
}

export default DashPage;