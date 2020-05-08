import React from "react";
import "../Css/Contact.css";
import FontAwesome from "react-fontawesome";
import { ArrowsMove } from "react-bootstrap-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwi } from "@fortawesome/free-solid-svg-icons";
import { Jumbotron, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Jumbotron className="bg">
      <Row>
        <Col>
          <p>
            Abuja, Nigeria <br />
            (234) 8090990653 <br />
            odeyxtian@gmail.com <br />
            Nationality: <br />
            Nigerian.
          </p>{" "}
        </Col>
        <Col>
          <ArrowsMove />
          <FontAwesome
            className="super-crazy-colors"
            name="rocket"
            size="2x"
            spin
            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
          />
          Twitter facebook linkedin git
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Contact;
