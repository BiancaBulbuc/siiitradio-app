import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // id: 0,
            email: '',
            password: '',
            name: ''
            // hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3004/users', {
          method: 'POST',
          headers: {
            'Accept': 'applocation/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( {
            id : this.state.id,
            name : this.state.name,
            email : this.state.email,
            username : this.state.username,
            password : this.state.password,
            item : this.state.item,
            itemType : this.state.itemType
          })
        }).then(res => res.json())
        .then(value => console.log(value))
        .catch(err => console.log(err));

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/login" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
