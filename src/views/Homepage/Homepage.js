import React from 'react';
import {   Route } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import { Application } from '../../views/application/Application'; 
// import   UserContext  from '../../shared/UserContext/UserContext';
import { FacebookLoginButton } from '../../shared/FacebookLoginButton/FacebookLoginButton';

import { Carousel, Card, CardGroup } from 'react-bootstrap'; 
import { NavLink } from "reactstrap";
import {LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg'; 
import music from './music.jpg';
import news from './news.jpg';
import local from './local.jpg';


export class Homepage extends React.Component {
 


  render() {
    return(
      <div>
      
    
      <Route exact path to = "/Application" component = {Application}/>
      <Route exact path = "/social-login" component = {FacebookLoginButton}/>
      
       
        <div className="Homepage-container"> 
          <Carousel className="Homepage-carousel">
            <Carousel.Item >
              <img
                className="d-block w-100 item-carousel"
                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Welcome to SiiiT RADIO</h3>
                <p>This will be your source to music, news and all real moments at work or in spare time.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>All kinds of Music</h3>
                <p>Electronic music, house, techno, rock, whatever you like</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>News and Shows</h3>
                <p>Listen to the best podcast on many current subjects</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div> 
        <CardGroup >
          <Card className ="card-homepage">
            <Card.Img variant="bottom" src={music} />
            <Card.Body>
              <Card.Title>Music</Card.Title>
              <Card.Text>
                Music all around, click here and listen.
              </Card.Text>
              <LinkContainer exact to= "/MusicRadio">   
              
                  <NavLink href="/MusicRadio">Music</NavLink>
             
              </LinkContainer>
            </Card.Body> 
          </Card>
          <Card className ="card-homepage">
            <Card.Img variant="bottom" src={news} />
            <Card.Body>
              <Card.Title>News</Card.Title>
              <Card.Text>
                Here, you can find all the news stations.
              </Card.Text>
              <LinkContainer exact to= "/news">   
           
                  <NavLink href="/news">News</NavLink>
             
              </LinkContainer>
            </Card.Body> 
          </Card>
          <Card className ="card-homepage">
            <Card.Img variant="bottom" src={local} />
            <Card.Body>
              <Card.Title>Local Radios</Card.Title>
              <Card.Text>
                Listen here all the radios in your country.
              </Card.Text>
              <LinkContainer exact to= "/local-radios">   
              
                  <NavLink href="/local-radios">Local Radios</NavLink>
           
              </LinkContainer>
            </Card.Body>
          </Card>
        </CardGroup> 
        
           
      </div>

    );
  }


}