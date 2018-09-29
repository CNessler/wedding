import React, { Component } from 'react';
import Input from './Input';

class FormContainer extends Component {
    
    constructor(props) {
        console.log("here");
        super(props);

        this.state =  {
            newGuest: {
                name : '',
                guestOne : '',
                guestTwo : '',
                guestThree : '',
                guestFour : '',
                attending : false,
                notComing : false
            }
        }

        this.handleName = this.handleName.bind(this);
    }

    handleName(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            newGuest: {
              ...prevState.newGuest,
              name: value
            }
          }),
          () => console.log(this.state.newGuest)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;
    
        fetch("http://example.com", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }).then(response => {
          response.json().then(data => {
            console.log("Successful" + data);
          });
        });
      }

    render() {
        return (

            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Input
                inputType={"text"}
                title={"Full Name"}
                name={"name"}
                value={this.state.newGuest.name}
                placeholder={"Enter your name"}
                handleChange={this.handleInput}
                />{" "}
            </form>
        )
    } 
}

export default FormContainer;