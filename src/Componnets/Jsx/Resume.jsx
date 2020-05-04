import React from "react";
import { Jumbotron } from "react-bootstrap";

const Resume = () => {
  return (
    <div>
      <Jumbotron>
        <h5>EXPERIENCE</h5>
        <ul>
          <li>
            <p>
              <h6>
                Bulletin Press Limited --
                <span> 2014 - 2018</span>{" "}
              </h6>
              <ul>
                <li>Development and matainance of web applications</li>
                <li>UI/UX Design</li>
                <li> Design and Printing of flyer, Magazine & Book cover</li>
              </ul>
            </p>
          </li>
        </ul>
      </Jumbotron>
    </div>
  );
};

export default Resume;
