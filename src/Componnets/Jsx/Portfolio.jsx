import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import home from "../img/mhome.jpg";
import pc from "../img/mpc.jpg";
import CardDetails from "./CardDetails";
import Modal from "./modal";

const Portfolio = () => {
  const [projects, setProject] = useState([
    {
      name: "PortFolio",
      about: "My PortFolio Made with react",
      image: pc,
    },
    {
      name: "Medos",
      about: "made",
      image: pc,
    },
    {
      name: "Text to Writting",
      about: "react",
      image: pc,
    },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1 className="h1-c">PORTFOLIO</h1>
      <div style={{ textAlign: "center" }}>
        {projects.map((project, index) => {
          return (
            <>
              <Modal
                click={handleShow}
                close={handleClose}
                show={show}
                project={project}
              />
              <Container>
                <CardDetails
                  index={index}
                  project={project}
                  show={handleShow}
                />
              </Container>
            </>
          );
        })}
        s
      </div>
    </div>
  );
};

export default Portfolio;
