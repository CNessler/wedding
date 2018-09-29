import React, { Component } from 'react';
import FormContainer from './FormContainer';
import Reservation from './Reservation';

class NavLinks extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {info: "", journey:false};
        // This binding is necessary to make `this` work in the callback
        this.details = this.details.bind(this);
        this.journey = this.journey.bind(this);
        this.rsvp = this.rsvp.bind(this);
      }
      
    details() {
        this.setState({info : "apple", journey:false});
        var view = document.getElementById('nav');
        view.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    journey() {
        this.setState({journey: true});
        var view = document.getElementById('nav');
        view.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    rsvp() {
        this.setState({info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."});
        var view = document.getElementById('nav');
        view.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    render() {
        let data;
        if(this.state.journey === true) {
            data = <Reservation/>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div id="nav" className="col-md-4 text-center">
                        <button id="nav-btn" onClick={this.details} type="button" className="btn btn-outline-success">The Deets</button>
                    </div>
                    <div id="nav" className="col-md-4 text-center">
                        <button id="nav-btn" onClick={this.journey} type="button" className="btn btn-outline-success">Our Journey</button>
                    </div>
                    <div id="nav" className="col-md-4 text-center">
                        <button id="nav-btn" onClick={this.rsvp} type="button" className="btn btn-outline-success">RSVP</button></div>
                </div>
                <div className="row">
                    {data}
                    <div>{this.state.info}</div>
                </div>
            </div>
        )
    }
}

export default NavLinks;