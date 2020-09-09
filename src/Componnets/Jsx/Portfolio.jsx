import React, { useState } from "react";
import TextWrite from "../img/TEXTWRITE.gif";
import Medos from "../img/medos.gif";
import Estimator from "../img/estimator.gif";
import CardDetails from "./CardDetails";
import { Jumbotron } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    {
      name: "PortFolio",
      about: "My PortFolio Made with react",
      image: Medos,
      git: "url",
      id: 1,
    },
    {
      name: "Medos",
      about: "My coffe todo list",
      image: Medos,
      id: 2,
    },
    {
      name: "Text to Writting",
      about: "Text to writting covert typed text to handwritting",
      image: TextWrite,
      id: 3,
    },
    {
      name: "Covid-19 Estimator",
      about: "Estimate for covid-19",
      image: Estimator,
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
