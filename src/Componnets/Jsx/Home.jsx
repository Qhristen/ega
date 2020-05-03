import React from "react";
import "../Css/Home.css";
import Particles from "react-particles-js";
import figure from "../img/egafff.svg";
import { Button } from "react-bootstrap";
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
    <div>
      <div className="con">
        <div className="patricles">
          <Particles params={paticlesOpt} />
        </div>
      </div>
      <div className="c-img">
        <img src={figure} alt="dev" />
      </div>
      <div className="container">
        <caption>
          <h3>Hi, </h3>
          <Typical
            steps={["I Design", 1000, "I Develop", 500]}
            loop={Infinity}
            wrapper="h1"
          />
          {/* <h6>Front End Web Developer / UI/UX Designer</h6> */}
        </caption>

        <Link to="/DashBoard">
          <Button className="H-Button">Learn more about what i do</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
