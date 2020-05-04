import React, { useState, useEffect } from "react";
import pc from "../img/mpc.jpg";
import CardDetails from "./CardDetails";
import { Jumbotron } from "react-bootstrap";

const Portfolio = () => {
  const [projects, setProject] = useState([
    {
      name: "PortFolio",
      about: "My PortFolio Made with react",
      image: pc,
      id: 1,
    },
    {
      name: "Medos",
      about: "made",
      image: pc,
      id: 2,
    },
    {
      name: "Text to Writting",
      about: "react",
      image: pc,
      id: 3,
    },
    {
      name: "jgdf",
      about: "rebvccact",
      image: pc,
      id: 4,
    },
    {
      name: "jgdf",
      about: "rebvccact",
      image: pc,
      id: 4,
    },
  ]);

  const [show, setShow] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (e, id) => setShow(id);
  return (
    <Jumbotron style={{ overflow: "hidden" }}>
      <h1 className="h1-c">PORTFOLIO</h1>

      <div
        className="card-flex"
        style={{
          display: "flex",
          // flexWrap: "wrap",
          alignContent: "center",
          flexBasis: "auto",
          flex: "1 0 50%",
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
