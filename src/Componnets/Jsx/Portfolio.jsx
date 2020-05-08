import React, { useState } from "react";
import pc from "../img/mpc.jpg";
import TextWrite from "../img/TEXTWRITE.gif";
import CardDetails from "./CardDetails";
import { Jumbotron } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    {
      name: "PortFolio",
      about: "My PortFolio Made with react",
      image: pc,
      id: 1,
    },
    {
      name: "Medos",
      about: "made",
      image: TextWrite,
      id: 2,
    },
    {
      name: "Text to Writting",
      about: "react",
      image: TextWrite,
      id: 3,
    },
    {
      name: "jgdf",
      about: "rebvccact",
      image: TextWrite,
      id: 4,
    },
  ];

  const [show, setShow] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (e, id) => setShow(id);
  return (
    <Jumbotron style={{ overflow: "hidden" }}>
      <h5 className="">PORTFOLIO</h5>
      <div
        className="card-flex"
        style={{
          display: "flex",
          // flexWrap: "wrap",
          alignContent: "center",
          flexBasis: "auto",
        }}
      >
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <CardDetails
                key={project.id}
                close={handleClose}
                project={project}
                show={show}
                click={(e) => handleShow(e, project.id)}
              />
            </div>
          );
        })}
      </div>
    </Jumbotron>
  );
};

export default Portfolio;
