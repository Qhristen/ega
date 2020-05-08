import React from "react";
import "../Css/Home.css";
import Particles from "react-particles-js";
import ega from "../img/ega.jpg";
import { Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typical from "react-typical";

const paticlesOpt = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
  },
};

const Home = () => {
  return (
    <Container>
      <div className="con">
        <div className="patricles">
          <Particles params={paticlesOpt} />
        </div>
      </div>
      <div className="c-img">
        <Image src={ega} alt="dev" roundedCircle />
      </div>

      <caption className="container">
        <h3>I'm </h3>
        <h1>
          EGAGA <br /> CHRISTIAN
        </h1>
        <Typical
          steps={["SOFTWARE ENGINEER", 1000, "DESIGNER", 500]}
          loop={Infinity}
          wrapper="h4"
        />
        {/* <h6>Front End Web Developer / UI/UX Designer</h6> */}
      </caption>

      <Link to="/DashBoard">
        <Button className="H-Button">Learn more about what i do</Button>
      </Link>
    </Container>
  );
};

export default Home;
