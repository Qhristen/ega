import React, {useState} from "react";
import {Element} from "react-scroll";
// import {Container, Image} from "react-bootstrap";
// import Typical from "react-typical";
import Projects from "./Projects";
import CardDetails from "./CardDetails";
import Contact from "./Contact";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserAlt,
  faPalette,
  faSkiing,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [show, setShow] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (e, id) => setShow(id);
  return (
    <div>
      <Element name="home" className="element">
        <div className="hero">
          <h1 className="hero-name"> Hi, I'm Christian</h1>
          <div className="hero-desc">
            <h4>FRONT END DEVELOPER / DESIGNER / FREELANCER</h4>
            {/* <Typical
            steps={["I'M A DEVELOPER", 1000, "I'M A DESIGNER", 500]}
            loop={Infinity}
            wrapper="h4"
          /> */}
          </div>
        </div>
      </Element>
      <Element name="skills" className="element">
        <div className="skill">
          <h3 className="skill-header">Skills</h3>
          <div className="skill-item container">
            {[
              "html5",
              "css3",
              "react",
              "wordpress",
              "aws",
              "node",
              "git",
              "js",
              "npm",
              "figma",
              "sketch",
              "adobe",
              "docker",
              "java",
              "spotify",
              "wix",
            ].map((icon) => (
              <div className="skill-item-list">
                <FontAwesomeIcon
                  className="skill-icon"
                  icon={["fab", `${icon}`]}
                />
              </div>
            ))}
          </div>
        </div>
      </Element>
      <Element name="Services" className="element">
        <div className="Services">
          <h3 className="Services-header">Services</h3>
          <div className="Services-item container">
            <div className="Services-item-list">
              <FontAwesomeIcon className="services-icon" icon={faSkiing} />
              <br />
              <h2>Performance</h2>
              <p>
                Owning a fast website with great performance is key to keeping
                people around which converts them into customers. I build and
                can also offer this as a standalone service for existing
                websites.
              </p>
            </div>
            <div className="Services-item-list">
              <FontAwesomeIcon className="services-icon" icon={faUserAlt} />
              <br />
              <h2>User Focused</h2>
              <p>
                User focused design should be the primary goal of any website,
                and design to help the user need.
              </p>
            </div>
            <div className="Services-item-list">
              <FontAwesomeIcon className="services-icon" icon={faPalette} />{" "}
              <br />
              <h2>UI/UX DESIGN</h2>
              <p>
                The user interface of an application, whether it's mobile or
                desktop, can make or break a business. Getting the interface
                right and most importantly of all, making it easy to navigate,
                are the keys to a successful app.{" "}
              </p>
            </div>{" "}
            <div className="Services-item-list">
              <FontAwesomeIcon
                className="services-icon"
                icon={faShoppingCart}
              />{" "}
              <br />
              <h2>eCommerce</h2>
              <p>
                Deeveloping a good online store can be a little hard without the
                right tool. Over the years I've learned the best ways to design
                stores that sell products and provide real value to customers.
              </p>
            </div>
          </div>
        </div>
      </Element>
      <Element name="work" className="element">
        <div className="recent-work">
          <h3 className="recent-work-header">Recent Projects</h3>
          <div className="recent-work-item container">
            {Projects.map((project) => (
              <CardDetails
                key={project.id}
                close={handleClose}
                project={project}
                show={show}
                click={(e) => handleShow(e, project.id)}
              />
            ))
              .sort()
              .reverse()}
          </div>
        </div>
      </Element>

      <Element name="contact" className="element">
        <div className="contact">
          <h3 className="contact-header">Get in touch</h3>
          <Contact />
          <p className="footer"> &copy; {new Date().getFullYear()} </p>
        </div>
      </Element>
    </div>
  );
};

export default Home;
