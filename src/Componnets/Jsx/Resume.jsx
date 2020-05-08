import React from "react";
import { Jumbotron, Accordion, Card, Button } from "react-bootstrap";

const Resume = () => {
  return (
    <Jumbotron>
      <h5>EXPERIENCE</h5>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <h6>
                Software Developer/Designer, Bulletin Press Limited --
                <span> 2014 - 2018</span>{" "}
              </h6>{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>
                  Worked with team to Develop and maintain web applications
                  using JavaScript, ReactJS, NodeJS and Mongo
                </li>
                <li>Build UI/UX Design for products with Figma</li>{" "}
                <li>Analyzed Newtworking Systems and increase functionality</li>
                <li> Design and Printing of flyer, Magazine & Book cover</li>
                <li>
                  Attend Seminars and convention for updates to design and code
                  security
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <h6>
                Freelancer -- <span> Recent</span>{" "}
              </h6>{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {" "}
              <ul>
                <li>
                  Built an online portffolio for client with ReactJS and
                  Boostrap{" "}
                </li>
                <li>Develop UI/UX Design for customer</li>{" "}
                <li>
                  Work with team to upgrade an existing system using ReactJS and
                  NodeJS
                </li>
                <li> Design and Printing of flyer, Magazine & Book cover</li>
                <li>
                  Attend Seminars and convention for updates to design and code
                  security
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Jumbotron>
  );
};

export default Resume;
