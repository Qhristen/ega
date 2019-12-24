import React, { Component } from 'react';
import './Services.css';
import { Jumbotron, Card } from 'react-bootstrap';


export default class Services extends Component {
    render() {
        return (
            <Jumbotron className="bg">
                <div className="container">
                    <h4 className="al">WHAT I DO?</h4>
                    <h3 className="Ex">HERE ARE SOME OF MY <br /> EXPERTISE</h3>
                    <div className="card-grid">
                        <Card style={{ width: '18rem' }}>
                            {/* <MDBIcon icon="camera-retro" size="2x"/> */}
                            <Card.Body>
                                <Card.Title>INNOVATIVE IDEAS</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <span class="icon2"><i class="icon-data"></i></span>
                            <Card.Body>
                                <Card.Title>SOFTWARE</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <span class="icon2"><i class="icon-data"></i></span>
                            <Card.Body>
                                <Card.Title>GRAPHIC DESIGN</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <span class="icon2"><i class="icon-data"></i></span>
                            <Card.Body>
                                <Card.Title>APPLICATION</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>

                </div>
            </Jumbotron>
        )
    }
}
