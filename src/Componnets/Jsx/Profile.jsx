import React from "react";
import { ProgressBar, Row, Col, Jumbotron } from "react-bootstrap";

const Resume = () => {
  return (
    <div>
      {/* <SimpleBar style={{maxHeight: 500}}> */}

      <Row>
        <Col sm={6}>
          <Jumbotron>
            <h1 className="ega-name">
              Egaga <br />
              Christian
            </h1>
            <h6 className="front-end">SOFTWARE ENGINEER / DESIGNER</h6>

            <h5>PROFILE</h5>
            <p>
              Experienced Software Developer adept in bringing forth expertise
              in design, installation, testing and maintenance of software
              systems. Equipped with a diverse and promising skill-set.
              Proficient in various platforms, languages. Experienced with the
              latest cutting edge development tools and procedures. Able to
              effectively self-manage during independent projects, as well as
              collaborate as part of a productive team.
            </p>
          </Jumbotron>
        </Col>
        <Col sm={6}>
          <Jumbotron>
            <h5>DETAILS</h5>
            <p>
              Abuja, Nigeria <br />
              (234) 8090990653 <br />
              odeyxtian@gmail.com <br />
              Nationality: <br />
              Nigerian.
            </p>

            <h6>HTML</h6>
            <ProgressBar striped variant="info" now={80} />
            <h6>CSS</h6>
            <ProgressBar striped variant="info" now={75} />
            <h6>JAVASCRIPT</h6>
            <ProgressBar striped variant="info" now={75} />
            <h6>REACT</h6>
            <ProgressBar striped variant="info" now={70} />
            <h6>GIT</h6>
            <ProgressBar striped variant="info" now={90} />
            <h6>MONGO</h6>
            <ProgressBar striped variant="info" now={70} />
            <h6>FIGMA</h6>
            <ProgressBar striped variant="info" now={80} />
          </Jumbotron>
        </Col>
      </Row>

      {/* </SimpleBar> */}
    </div>
  );
};

export default Resume;
