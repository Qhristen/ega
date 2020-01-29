import React from 'react';
import '../Css/Contact.css';
import { Jumbotron } from 'react-bootstrap';


const Contact = () =>{
        return (
            <Jumbotron className="bg">
                <h1 className="h1-c">Contact</h1>
                <form className="con-layout"> 
                    <div className="row">
                        <div className="col-md-5">
                        <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-md-5">
                        <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="col-md-10">
                        <textarea className="form-control"  placeholder="Message" id="exampleFormControlTextarea1" rows="8"/>
                        </div>
                        <div className="col-md-5">
                        <button type="submit" className="btn btn-primary mb-2">Send</button>

                        </div>
                    </div>
                </form>
            </Jumbotron>
        )
    
}

export default Contact;