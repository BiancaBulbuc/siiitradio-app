import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import UserContext from '../../../../shared/user-context/user.context';
// import { Redirect } from 'react-router-dom';
// import { Button, Form, Container, Row, Image, Col } from 'react-bootstrap';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.apiUrl = "http://localhost:3004/users";
    this.state = {
      id: 0,
      user: {},
      name: '',
      email: '',
      password: '',
      redirect: false,        
      validated: false,
      isValid: true,
      userExist: []
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
}

async inputChanged(e) { // hot plate
  const value = e.currentTarget.value;
  const user = this.state.user;
  user[e.currentTarget.id] = value;
  this.setState({user});
}

async formSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (form.checkValidity() === false) {
    return;
  } 

  const resp =  await axios.post(this.apiUrl, this.state.user);  
  console.log(resp.data);

  this.context.handleUserChange(resp.data);
  this.setState({validated: true, user: resp.data, redirect: true});
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
