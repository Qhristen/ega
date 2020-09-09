import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import {Form, Container, Row, Col, Button} from "react-bootstrap";
import Mailto from "./Mailto";

const Contact = () => {
  return (
    <Container>
      <div className="inCon">
        {/* <Form>
          <Form.Control size="lg" placeholder="Name" />

          <Form.Control size="lg" type="email" placeholder="Email" />

          <Form.Control
            as="textarea"
            placeholder="Message"
            style={{height: "260px"}}
            row="8"
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
        <Mailto email="odeyxtian@gmail.com" subject="From Portfolio">
          <FontAwesomeIcon className="contact-icon" icon={faEnvelopeOpenText} />{" "}
        </Mailto>

        <FontAwesomeIcon
          onClick={() => (window.location = "https://github.com/Qhristen")}
          className="contact-icon"
          icon={["fab", "github"]}
        />

        <FontAwesomeIcon
          onClick={() => (window.location = "https://twitter.com/qhristen")}
          className="contact-icon"
          icon={["fab", "twitter"]}
        />

        <FontAwesomeIcon
          onClick={() => (window.location = "https://github.com/Qhristen")}
          className="contact-icon"
          icon={["fab", "linkedin"]}
        />

        <FontAwesomeIcon className="contact-icon" icon={["fab", "dev"]} />

        <FontAwesomeIcon className="contact-icon" icon={["fab", "facebook"]} />
      </div>
    </Container>
  );
};

export default Contact;
