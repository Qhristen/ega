import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import Modal from "./modal";

const modal = ({ click, close, show, project }) => {
  return (
    <div>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title> {project.name} </Modal.Title>
        </Modal.Header>
        <img variant="top" height="300" src={project.image} />
        <Modal.Body> {project.about} </Modal.Body>
      </Modal>
    </div>
  );
};

export default modal;
