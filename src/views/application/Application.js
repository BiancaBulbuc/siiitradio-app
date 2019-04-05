import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import {SideMenu} from '../../shared/side-menu/SideMenu';
import { BrowserRouter, Route } from 'react-router-dom';
import './Application.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MusicRadio } from '../../views/application/music/MusicRadio';
import { NewsRadio } from '../../views/application/news/NewsRadio';
import { LocalRadio } from '../../views/application/local-radios/LocalRadio';
import { HomeRadio } from '../../views/application/home/HomeRadio';
import { Team } from '../../views/application/team/team';
import { RadioPage } from '../../views/application/radiopage/RadioPage';
import { Favorites } from '../../views/application/favorites/Favorites';  
// import { MainFooter } from '../../shared/footer/MainFooter';
import { Homepage } from '../../views/Homepage/Homepage';
import { Container, Row, Col } from 'reactstrap'; 

export class Application extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Container>
            <Row className="app-main-container">
              <Col  className="page-views">
                <Route exact path = "/homepage" component = {Homepage} />
                <Route exact path = "/Application" component = {Application} />
                <Route exact path = "/home" component = {HomeRadio} />
                <Route exact path = "/MusicRadio" component = {MusicRadio} />
                <Route exact path = "/news" component = {NewsRadio} />
                <Route exact path = "/local-radios" component = {LocalRadio} />
                <Route exact path = "/team" component = {Team} />
                <Route exact path = "/radiopage/:radioId" component = {RadioPage} />
                <Route exact path = "/favorites/:favorites" component = {Favorites} /> 
                
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

 