import React, { Component } from 'react';
import '../Css/Services.css';
import img from '../img/dev1.svg';
import { Jumbotron } from 'react-bootstrap';


export default class Services extends Component {
    render() {
        return (
            <Jumbotron className="bg">
                    <h4 className="al">WHAT I DO?</h4>
                    <h3 className="Ex">HERE ARE SOME OF MY <br /> EXPERTISE</h3>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '17rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">INNOVATIVE IDEAS</h5>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '17rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Web Design</h5>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '17rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">UI/UX Designs</h5>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '17rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Grahics Design</h5>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">

                            <div className="card" style={{ width: '17rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Online Mentorship</h5>
                                    
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">

                            <div className="card" style={{ width: '17rem' }}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Photography</h5>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

            </Jumbotron>
        )
    }
}
