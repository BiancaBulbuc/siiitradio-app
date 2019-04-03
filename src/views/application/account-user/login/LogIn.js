import React from 'react';
// import { connect } from 'react-redux';
// import Modal from 'react-bootstrap/Modal';
// import  { Button , Form } from 'react-bootstrap';
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import axios from 'axios';
import UserContext from '../../../../shared/user-context/user.context';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

// import { userActions } from '../_actions';

export default class LoginPage extends React.Component {
    constructor(...args) {
        super(...args);
        this.apiUrl = "http://localhost:3004/users";
        this.state = {
          id: 0,
          user: {},
          name: '',
          email: '',
          password: '',
          checkUser: '',
          redirect: false,
          modalShow: false,
          validated: false,
          isValid: true,
          isAuthenticated: false

            // reset login status
            // this.props.dispatch(userActions.logout());

        
        };

        this.inputChanged = this.inputChanged.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    

    async inputChanged(e) {
        const value = e.currentTarget.value;
        const user = this.state.user;
        user[e.currentTarget.id] = value;
        this.setState({user});
      }
  
  
      async formSubmit(e) {
          e.preventDefault();
          const form = e.currentTarget;
          const url = this.apiUrl + "/?email=" + this.state.user.email + '&password=' + this.state.user.password;
          if (form.checkValidity() === false) {
             return;
          }
  
          this.setState({ validated: true });
  
          console.warn(this.state);
         const resp =  await axios.get(url);
         if(resp.data[0]) {
             this.setState ({redirect: true});
             this.context.handleUserChange(resp.data[0]);
             document.body.classList.add('login');
         } else {
             this.setState({validated: false, isValid: false})
         }
      }
      
        // responseFacebook = (response) => {
        //   //console.log(response);
        //   //console.log(this.context);
        //   this.context.handleUserChange(response);
        //   this.setState({
        //     redirect: true,
        //   });
        //   document.body.classList.add('login');
        // }
      
        // responseGoogle = (response) => {
        //   console.log(response);
      
        //   this.context.handleUserChange(response.profileObj);
        //   this.setState({
        //     redirect: true
        //   });
        //   document.body.classList.add('login');
        // }
       
                
      render() {
          if (this.state.redirect === true) {
              return (
              <Redirect to='/' />
              );
          }        
          
          const { validated } = this.state;
          return (
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
    
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
    
              <div className="FormField">
                  <button className="FormField__Button mr-20" >Sign In</button> <Link to="/signup" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
    
          );
      }
  }
  LoginPage.contextType = UserContext;
  