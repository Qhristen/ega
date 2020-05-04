import React from "react";
import "../Css/Contact.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwi } from "@fortawesome/free-solid-svg-icons";
import { Jumbotron } from "react-bootstrap";

const Contact = () => {
  return (
    <Jumbotron className="bg">
      <p>
        Abuja, Nigeria <br />
        (234) 8090990653 <br />
        odeyxtian@gmail.com <br />
        Nationality: <br />
        Nigerian.
      </p>{" "}
    </Jumbotron>
  );
};

export default Contact;
