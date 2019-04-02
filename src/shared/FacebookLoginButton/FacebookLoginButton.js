import React, { Component } from 'react';
// import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './FacebookLoginButton.css';
 

export class FacebookLoginButton extends Component {
 
  
  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="social-login">
      <FacebookLogin
        appId="2529415047087508" //APP ID NOT CREATED YET
        autoLoad={true}
        fields="name,email,picture" 
        callback={responseFacebook}
       />
        
      
      <br />
      <br />


      <GoogleLogin
        clientId="734432569848-at20le0qt6utgldu65nohqgs6m3asctq.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}
 