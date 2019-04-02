import React from 'react';
// import { NavbarHomepage } from '../../shared/navbar/NavbarHomepage';
// import { SideMenu } from '../../shared/side-menu/SideMenu';
import { BrowserRouter, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Application } from '../../views/application/Application'; 
// import { FacebookLoginButton } from '../../shared/FacebookLoginButton/FacebookLoginButton';

import {Carousel, Jumbotron, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';

export class Homepage extends React.Component {
  render() {
    return(
    
      <BrowserRouter>
        <div className="Homepage-container">
          <Route exact path to = "/Application" component = {Application}/>

          <LinkContainer exact to= "/social-login">
              <a href="/social-login">Log in with Facebook or Google </a>
           </LinkContainer>
          
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
        </div>
      </BrowserRouter>

    );
  }
}