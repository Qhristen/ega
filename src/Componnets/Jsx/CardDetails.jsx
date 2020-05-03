import React, { useState } from "react";
import { Jumbotron, Card, Button, Row, Col } from "react-bootstrap";

const CardDetails = ({ project, show }) => {
  return (
    <div>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title> {project.name} </Card.Title>
              <Button variant="primary" onClick={show}>
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
