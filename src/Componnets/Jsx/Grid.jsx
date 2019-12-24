import React, {Component} from 'react';
import './Grid.css';
import NavBar from './NavBar';
import {Row, Col} from 'react-bootstrap';
import Home from './Home';


export default class Grid extends Component{
    render(){
        return(
            <div>

                <Row>
                    <Col sm={2} className="col4">
                        <NavBar />
                        <ul m-3>
                            <li>Home</li>
                            <li>services</li>
                            <li>work</li>
                            <li>experience</li>
                            <li>about</li>
                        </ul>
                    </Col>

                    <Col sm={10} className="col8">
                        <Home />
                        
                        </Col>
                    </Row>
 
          </div>

        )
    }
}
