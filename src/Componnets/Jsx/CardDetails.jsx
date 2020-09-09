import React from "react";
import {Card, Button, Row, Col} from "react-bootstrap";
import Modal from "./modal";
const CardDetails = ({click, close, show, project}) => {
  return (
    <div key={project.id} className="recent-item">
      <Modal key={project.id} close={close} show={show} project={project} />
      <Card onClick={click}>
        <Card.Img variant="top" src={project.image} />
        {/* <Card.Body>
          <Card.Title> {project.name} </Card.Title>
        </Card.Body> */}
      </Card>
    </div>
  );
};

export default CardDetails;
