import React from 'react';
// import { NavLink } from 'reactstrap';
import {Figure} from "react-bootstrap";
import './Main-Footer.css'
import logo from './logo.png';
import footer from './footer2.png';

 
export class MainFooter extends React.Component {
   


    render() {
        return (
          <div className="footer-container">
            
              <div className= "footer-wrapper">
              <Figure.Image className="logo-image"
                  alt="logo"
                  src={logo}
                  />
                <div className="useful-links"> 
                  <h2 className="footer-link"><a href="/">CAREERS</a></h2>
                  <h2 className="footer-link"><a href="/">CONTACT US</a></h2>
                </div>
                <div className="privacy-links">
                  <h2 className="footer-link"><a href="/">TERMS AND CONDITIONS</a></h2>
                  <h2 className="footer-link"><a href="/">PRIVACY POLICY</a></h2>
                </div>

              
                
              </div>
              <div className="column-onweb copyright">
                  <div className="copyright">
                  <hr></hr>
                    <p>Copyright © 2019 All Rights Reserved by SiiT RADIO.</p>
                  </div>
                  
                  <Figure.Image className="footer-image"
                    alt="footer"
                    src={footer}
                    />
              </div>
            
          </div>
            );
        }
    }



