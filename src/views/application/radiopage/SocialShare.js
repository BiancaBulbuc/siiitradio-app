import React, { Component } from 'react';
import './SocialShare.css';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export class SocialShare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shareOpen: "closeShare",
            toggleButtonText: "Share this"
        };
      
        this.shareOpenToggle = this.shareOpenToggle.bind(this);
    
      }
      
    
    shareOpenToggle() {
        if (this.state.shareOpen==="closeShare") {
            this.setState({
                shareOpen: "openShare",
                toggleButtonText: "Hide sharing options"
            });
        }else {
            this.setState({
                shareOpen: "closeShare",
                toggleButtonText: "Share this"
            });
        }   
    }
   

  render() {

  
    //URL from current page
    // const url = window.location.href;
    
    //URL patterns for Social media sites share functionalities
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=`;
    const twitterUrl = `https://twitter.com/home?status=`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=`;

    return (
        <div className="socialShareContainer">
            <div>
                <button className="socialShareButton" onClick={this.shareOpenToggle}>{this.state.toggleButtonText}</button>
            </div>
            <div className={this.state.shareOpen} >

                <a   href={facebookUrl}  > 
                    <img className="social-image" src={facebook} alt="facebook-icon"></img>
                </a>
                <a href={linkedinUrl}  >
                    <img className="social-image"  src={twitter} alt="twitter-icon"></img>
                </a>
                <a href={twitterUrl}  >
                    <img className="social-image"  src={linkedin} alt="linkedin-icon"></img>
                </a>
            </div>           
        </div>
    );
  }


} 