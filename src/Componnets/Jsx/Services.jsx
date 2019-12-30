import React, { Component } from 'react';
import './Services.css';
import img from '../img/dev1.svg';
import { Jumbotron } from 'react-bootstrap';


export default class Services extends Component {
    render() {
        return (
            <Jumbotron className="bg">

                <div className="container">
                    <h4 className="al">WHAT I DO?</h4>
                    <h3 className="Ex">HERE ARE SOME OF MY <br /> EXPERTISE</h3>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">INNOVATIVE IDEAS</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">SOFTWARE</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">UI/UX Designs</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Consultancy</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Online Mentorship</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Application</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </Jumbotron>
        )
    }
}
