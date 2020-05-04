import React from "react";
import { Modal } from "react-bootstrap";

const modal = ({ close, show, project }) => {
  return (
    <div key={project.id}>
      <Modal show={show === project.id} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title> {project.name} </Modal.Title>
        </Modal.Header>
        <img
          variant="top"
          height="300"
          src={project.image}
          alt={project.name}
        />
        <Modal.Body> {project.about} </Modal.Body>
      </Modal>
    </div>
  );
};

export default modal;
