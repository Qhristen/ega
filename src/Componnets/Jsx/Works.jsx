import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../Css/Works.css';


export default class Works extends Component{
    render(){
        return (

            <Jumbotron className="bg">
                <h1>WORKS</h1>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                             </div>
                     </div>

                     <div className="col mb-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                             </div>
                     </div>

                     <div className="col mb-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                             </div>
                     </div>


                     
                 </div>

            </Jumbotron>

                    )
                }
            }
