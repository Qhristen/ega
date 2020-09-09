import React from "react";
import {Modal, Button, Image} from "react-bootstrap";

const MyModal = ({close, show, project}) => {
  return (
    <div key={project.id}>
      <Modal show={show === project.id} onHide={close}>
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Image
          variant="top"
          height="300"
          src={project.image}
          alt={project.name}
        />
        <Modal.Body>
          <Modal.Title> {project.name} </Modal.Title>
          {project.about} <br />
          <Button
            size="lg"
            variant="secondary"
            className="mt-2"
            style={{background: "#181717"}}
            onClick={() => (window.location = project.git)}
            block
          >
            Demo
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyModal;
