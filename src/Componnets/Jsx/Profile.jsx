import React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";

const Resume = () => {
  return (
    <div>
      {/* <SimpleBar style={{maxHeight: 500}}> */}

      <Row>
        <Col sm={6}>
          <Jumbotron>
            <h5>PROFILE</h5>
            <p>
              Am a front end developer who adept in bringing forth expertise in
              web development, design, installation, testing and maintenance of
              software systems. Equipped with a diverse and promising skill-set.
              Proficient in various platforms, languages. Experienced with the
              latest cutting edge development tools and procedures. Able to
              effectively self-manage during independent projects, as well as
              collaborate as part of a productive team.
            </p>
          </Jumbotron>
        </Col>
        <Col sm={6}>
          <Jumbotron>
            <div className="skills">
              <h5>SKILLS</h5>

              <li>JAVASCRIPT</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>REACT</li>
              <li>NODE</li>
              <li>MONGO</li>
              <li>FIGMA</li>
              <li>ADOBE ILLUSTRATOR</li>
              <li>Adobe XD</li>
              <li>ADOBE PHOTOSHOP</li>
            </div>
          </Jumbotron>
        </Col>
      </Row>

      {/* </SimpleBar> */}
    </div>
  );
};

export default Resume;
