import React from 'react';
import { ProgressBar, Row, Col, Jumbotron } from 'react-bootstrap';
import SideBar from 'simplebar-react';

const Resume = () => {
    return (

        <div>
            <SideBar style={{maxHeight: 652}}>
            <Row>
                <Col sm={6}>
                <Jumbotron>
                    <h1 className="ega-name">Egaga <br />Christian</h1>
                    <h6 className="front-end">FRONT-END WEB DEVELOPER  AND DESIGNER</h6>
                    <h5>DETAILS</h5>
                    <p>Abuja, Nigeria <br /> 
                    (234) 8090990653 <br />
                    odeyxtian@gmail.com <br />
                    Nationality: <br/>
                    Nigerian.
                    </p>

                    <h5>PROFILE</h5>
                    <p>Experienced Software Developer adept in bringing forth expertise in design, installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages. Experienced with the latest cutting edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.</p>
                    <h5>Skills</h5>
                    <h6>HTML</h6> 
                    <ProgressBar striped variant="info" now={80} />
                    <h6>CSS</h6>
                    <ProgressBar striped variant="info" now={75} />
                    <h6>JAVASCRIPT</h6>
                    <ProgressBar striped variant="info" now={70} />
                    <h6>REACT</h6>
                    <ProgressBar striped variant="info" now={60} />
                    <h6>GIT</h6>
                    <ProgressBar striped variant="info" now={90} />
                    <h6>MONGO</h6>
                    <ProgressBar striped variant="info" now={70} />
</Jumbotron>
          
                </Col>
                <Col sm={6}>
                <Jumbotron>

                    <h5>EDUCATION</h5>
                    <p>Google, Online Marketing Fundamentals Qualification <br/>
                    <span>2017</span></p>

                    <h5>EMPLOYMENT HISTORY</h5>
                    <p>Graphic Designer/Developer at Bulletin Press Limited, Abuja <br />
                    <span>November 2014 - January 2018</span> </p>
                    <h5>HOBBIES</h5>
                    <ul>
                        <li>Music</li>
                        <li>Travellin</li>
                        <li>Designing</li>
                        <li>Browsing</li>
                        <li>Research</li>
                    </ul>
                    </Jumbotron>
                </Col>
            </Row>

            </SideBar>


</div>


    )
}

export default Resume;