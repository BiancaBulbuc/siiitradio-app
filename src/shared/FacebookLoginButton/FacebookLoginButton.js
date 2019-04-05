import React from 'react';
// // import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './FacebookLoginButton.css';
import '../../index.html';
// import facebook from './facebook.png';
// import config from './config';
// import { Redirect, Link } from 'react-router-dom';
// import  { Button , Form } from 'react-bootstrap';

// import UserContext from '../../shared/UserContext/UserContext';

export class FacebookLoginButton extends React.Component {

  render() {
 

      const responseFacebook = (response) => {
        console.log(response);
      
        console.log(response["email"]);
        console.log(response["id"]);

        

        let picture = response["picture"];
        let data = picture["data"];
        console.log(data["height"]);
        console.log(data["width"]);
        console.log(data["url"]); 
        let name = response["name"];
        this.setState({name});
        console.log(this.state.name)
        
       
    }
     
    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <>
      <div>
      <p>
        Welcome {this.name}
      </p>
      </div>


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
      </>
    );
  }
}



















// export class FacebookLoginButton extends React.Component {

    
//   componentDidMount(){
    
//     // Load the required SDK asynchronously for facebook, google and linkedin
//     (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = "//connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
    
//     window.fbAsyncInit = function() {
//         window.FB.init({
//           appId      : "2529415047087508",
//           cookie     : true,  // enable cookies to allow the server to access the session
//           xfbml      : true,  // parse social plugins on this page
//           version    : 'v2.8' // use version 2.1
//         });
//     };
// }

// facebookLogin = () => {
//     window.FB.login(
//         this.checkLoginState(), 
//         { scope : 'email, public_profile' } //Add scope whatever you need about the facebook user
//     ); 
    
//     window.FB.login(
//         function(resp){
//             this.statusChangeCallback(resp);
//         }.bind(this),{ scope : 'email,user_work_history,user_education_history,user_location,public_profile' });
// }

// checkLoginState() {
//     alert("Checking Login Status")
//     console.log( "Checking login status..........." );
    
//     window.FB.getLoginStatus(function(response) {
//         alert("FB Callback")
//         console.log("----------->")
//         console.log(response)
//         this.statusChangeCallback(response);
//     }.bind(this));
// }

// statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     console.log(response);
//     if (response.status === 'connected') {
//         alert( "Connected to facebook. Retriving user from fb" );
//         // Logged into your app and Facebook.
//         this.fetchDataFacebook();
//     } else if (response.status === 'not_authorized') {
//         console.log('Import error', 'Authorize app to import data', 'error')
//     } else {
//         console.log('Import error', 'Error occured while importing data', 'error')
//     }
// }

// fetchDataFacebook = () => {
//     console.log('Welcome!  Fetching your information.... ');

//     window.FB.api('/me', function(user) {
    
//         console.log( user );
//         console.log('Successful login from facebook : ' + user.name);
//         alert( 'Successful login for: ' + user.name );
//     });
// }

// render(){
//     return(
//       <div>
//         <img className="fb-login" src={facebook} title="facebook login" alt="facebook" onClick={ () => this.facebookLogin() } />
//         <p>Welcome</p>
//       </div>
//     )
// }
// }




















//   componentDidMount() {
//     document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
//   }

//   /**
//    * Init FB object and check Facebook Login status
//    */
//   initializeFacebookLogin = () => {
//     this.FB = window.FB;
//     this.checkLoginStatus();
//   }

//   /**
//    * Check login status
//    */
//   checkLoginStatus = () => {
//     this.FB.getLoginStatus(this.facebookLoginHandler);
//   }

//   /**
//    * Check login status and call login api is user is not logged in
//    */
//   facebookLogin = () => {
//     if (!this.FB) return;

//     this.FB.getLoginStatus(response => {
//       if (response.status === 'connected') {
//         this.facebookLoginHandler(response);
//       } else {
//         this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'});
//       }
//     }, );
//   }

//   /**
//    * Handle login response
//    */
//   facebookLoginHandler = response => {
//     if (response.status === 'connected') {
//       this.FB.api('/me', userData => {
//         let result = {
//           ...response,
//           user: userData
//         };
//         this.props.onLogin(true, result);
//       });
//     } else {
//       this.props.onLogin(false);
//     }
//     console.log(response);
//   }

//   render() {
//     let {children} = this.props;
//     return (
//       <div onClick={this.facebookLogin}>
//         {children}
//       </div>
//     );
//   }
// }

















































 