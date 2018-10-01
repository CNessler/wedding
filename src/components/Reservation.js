import React, { Component } from 'react';

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        attending: 'attending',
        name: '',
        additionalGuests: []
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleShareholderNameChange = this.handleShareholderNameChange.bind(this);
      this.addGuest = this.addGuest.bind(this);
      this.removeGuest = this.removeGuest.bind(this);
    }
  
    handleInputChange(event) {
        this.setState({
            attending: event.target.value
          });
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
          });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.attending.value);
        event.preventDefault();
      }

    addGuest(event) {
        var newGuestList = this.state.additionalGuests;
        newGuestList.push('guest-' + this.state.additionalGuests.length)
        this.setState({
            additionalGuests: newGuestList
        });
    }

    handleShareholderNameChange = (idx) => (evt) => {
        const newShareholders = this.state.additionalGuests.map((shareholder, sidx) => {
          if (idx !== sidx) return shareholder;
          return { ...shareholder, name: evt.target.value };
        });
    
        this.setState({ additionalGuests: newShareholders });
      }

    removeGuest(event) {
        var test = this.state.additionalGuests;
        test.splice(parseInt(event.target.value), 1);
        var removedGuest = test;
        this.setState({additionalGuests : removedGuest});
    }

    render() {
      return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" 
                       className="form-control" 
                       id="name"
                       name="name"
                       onChange={this.handleNameChange}></input>
            </div>
            <div className="form-group">
                <i id="addGuest" className="fa fa-plus" aria-hidden="true" onClick={this.addGuest}> add guest</i>
            </div>
                {this.state.additionalGuests.length > 0 ? this.state.additionalGuests.map((guest, idx) => {
                    return <div className="form-group" key={idx}>
                        <label htmlFor="additionalGuests">Additional Guest</label>

                        <div className="input-group">
                        <input
                            type="text"
                            placeholder="name"
                            className="form-control"
                            id={idx}
                            onChange={this.handleShareholderNameChange(idx)}
                        />
                            <div className="input-group-addon"> 
                                <i id={idx} className="fa fa-minus" aria-hidden="true" value={idx} onClick={this.removeGuest}></i>
                            </div>
                        </div>
                    </div>
                }) : ''}
            <div className="form-check form-check-inline">
                <input type="radio" 
                       className="form-check-input" 
                       id="attending"
                       onChange={this.handleInputChange}
                       checked={this.state.attending === 'attending'}
                       value = "attending"/>
                <label className="form-check-label" htmlFor="attending">Wouldn't Miss It For The World</label>
            </div>
            <div className="form-check form-check-inline">
                <input type="radio" 
                       className="form-check-input" 
                       id="notComing"
                       onChange={this.handleInputChange}
                       value = "notComing"
                       checked={this.state.attending === 'notComing'}/>
                <label className="form-check-label" htmlFor="notComing">I'll Celebrate From Afar</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
    }
  }

export default Reservation;  