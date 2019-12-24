import React from 'react';
import './Home.css';
import Particles from 'react-particles-js';
import dev1 from '../img/dev1.svg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const paticlesOpt = {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 1000
            }

        }
    }

}

const Home = () => {
    return (
        <div>

            <div className="con">
                <div className="patricles">
                    <Particles
                        params={paticlesOpt} />
                </div>
            </div>
            <div className="c-img">
                <img src={dev1} alt="dev" />
            </div>
            <div className="container">
                <caption>
                    <h3>Hi, am a </h3>
                    <h1>Front-End <br /> Web Developer</h1>
                </caption>

                <Link to="/DashPage" >
                    <Button variant="info">
                        portfolio
                    </Button>
                </Link>

            </div>


        </div>
    )

}


export default Home;