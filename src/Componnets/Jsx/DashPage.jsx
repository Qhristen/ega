import React, { useState } from 'react';
import './DashPage.css';
import Particles from 'react-particles-js';
import Services from './Services';
import Works from './Works';
import Experience from './Experience';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { red } from 'ansi-colors';


const paticlesOpt = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 900
      }

    }
  }

}


const DashPage = () => {
  const [scroll, setScroll] = useState();

  const handleScroll = () => {
    setScroll(
      <Experience />
    );
  };
  return (
    <div>
      <Row>
        <Col sm={3} className="col-color">
          <div className="pat-prop">
            <Particles params={paticlesOpt} />
          </div>
          <div className="list-prop">
            <ListGroup as="ul" className="list">
              <Link
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={{ bacground: red }}>
                <ListGroup.Item as="li" >
                  Services
             </ListGroup.Item>
              </Link>

              <Link
                to="works"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={{ bacground: red }}
              >
                <ListGroup.Item as="li" className="list">Works</ListGroup.Item>
              </Link>
              <Link
                //  to="experience" 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={{ bacground: red }}
                onClick={handleScroll}
              >
                <ListGroup.Item as="li" className="list">
                  Experince
              </ListGroup.Item>
              </Link>
              <Link to="/Skills">
                <ListGroup.Item as="li" className="list">Skills</ListGroup.Item>
              </Link>
            </ListGroup>


          </div>
        </Col>
        <Col sm={9}>

          <SimpleBar style={{ height: '600px' }}>
            <Element name='services' className="element">
              <Services />
            </Element>
            <Element name='works' className="element">
              <Works />
            </Element>
            <Element name='experience' className="element">

              <p>{scroll}</p>
            </Element>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto illum, vero sed facilis dolorum corporis unde ipsa animi tenetur ullam possimus, et dolor? Magnam sint nisi aut a natus!
            Sit, unde doloremque eaque id architecto reiciendis impedit commodi doloribus eveniet deserunt omnis blanditiis magnam totam consectetur! Possimus harum ad sint odio laborum rem tempore, saepe doloremque. Reiciendis, nobis quas.
            Id recusandae enim earum quos natus quisquam dolore distinctio iste eligendi placeat libero iure voluptates voluptas eum rem corporis facilis quae voluptatum eaque sapiente veritatis reiciendis molestiae, similique nesciunt. Quibusdam!
            Temporibus sit natus voluptates eius, distinctio quo deserunt! Accusantium esse ut obcaecati neque? Velit animi corrupti earum optio ducimus quibusdam ut error totam, sapiente iusto sit eius, voluptatibus id eaque.
            Dolor laboriosam eveniet accusamus debitis iure aut, eos ex quisquam ea rem sunt officia inventore pariatur voluptatibus sint doloremque repellat. Mollitia deserunt maiores cum at ullam perspiciatis. Omnis, odio veniam.
            Quibusdam, nostrum? Cum sapiente temporibus minus voluptates! Iste nulla saepe repellendus sed voluptate ex facere earum aliquid perspiciatis ad adipisci quam illo at tempore dignissimos, natus architecto. Tenetur, omnis ullam.
            Dolorem cumque autem perferendis facere officiis, alias accusamus id ex porro dolores quaerat quae incidunt eligendi provident odit expedita repellendus corrupti aspernatur quisquam at optio consequatur! Similique fugit adipisci ipsum.
        </SimpleBar>
        </Col>
      </Row>
    </div>
  )
}

export default DashPage;