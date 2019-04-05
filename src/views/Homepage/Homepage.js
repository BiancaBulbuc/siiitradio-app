import React from 'react';
// import { NavbarHomepage } from '../../shared/navbar/NavbarHomepage';
// import { SideMenu } from '../../shared/side-menu/SideMenu';
import { BrowserRouter, Route } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import { Application } from '../../views/application/Application'; 
import   UserContext  from '../../shared/UserContext/UserContext';
import { FacebookLoginButton } from '../../shared/FacebookLoginButton/FacebookLoginButton';
// import { FacebookLoginButton } from '../../shared/FacebookLoginButton/FacebookLoginButton';

import {Carousel, Jumbotron, Container} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';

export class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        welcome: "Welcome To Siit RADIO",
        posts: []
    };
}
  render() {
    return(
    
      <BrowserRouter>
      <div>
      
    
      <Route exact path to = "/Application" component = {Application}/>
      <Route exact path = "/social-login" component = {FacebookLoginButton}/>
      <UserContext.Consumer>
      { ({user}) => (
        <div className="Homepage-container"> 
          <p>Welcome {user.name}</p>
 
 
 <FacebookLoginButton></FacebookLoginButton>
           
          <Carousel className="Homepage-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Jumbotron fluid className="Homepage-container">
            <Container>
              <h1>Fluid jumbotron</h1>
              <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
              </p>
            </Container>
          </Jumbotron>
        </div>)}
         </UserContext.Consumer>
           
      </div>
      </BrowserRouter>
         

    );
  }
}