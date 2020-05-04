import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Modal from "./modal";
const CardDetails = ({ click, close, show, project }) => {
  return (
    <div key={project.id}>
      <Row>
        <Col sm={15} className="roma">
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title> {project.name} </Card.Title>

              <Modal
                key={project.id}
                close={close}
                show={show}
                project={project}
              />
              <Button variant="primary" onClick={click}>
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardDetails;
