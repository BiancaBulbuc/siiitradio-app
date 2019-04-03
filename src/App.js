import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { NavbarHomepage } from './shared/navbar/NavbarHomepage';
import {SideMenu} from './shared/side-menu/SideMenu';
import { Application } from './views/application/Application';
import { MainFooter } from './shared/footer/MainFooter';
import { Homepage } from './views/Homepage/Homepage';
import { HomeRadio } from './views/application/home/HomeRadio';
import { MusicRadio } from './views/application/music/MusicRadio';
import { NewsRadio } from './views/application/news/NewsRadio';
import { LocalRadio } from './views/application/local-radios/LocalRadio';
import { Team } from './views/application/team/team';
import { RadioPage } from './views/application/radiopage/RadioPage';
import { Container, Row, Col } from 'reactstrap';
import Login from './views/application/account-user/login/Login';
import SignUp from './views/application/account-user/signup/SignUp';
import { Link, withRouter } from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Container>
          <Row className="app-main-container">
            <SideMenu></SideMenu>
            <Col  className="page-views">
         
              <Route exact path = "/Application" component = {Application} />
              <Route exact path = "/homepage" component = {Homepage} />
              <Route exact path = "/Application" component = {Application} />
              <Route exact path = "/home" component = {HomeRadio} />
              <Route exact path = "/MusicRadio" component = {MusicRadio} />
              <Route exact path = "/news" component = {NewsRadio} />
              <Route exact path = "/local-radios" component = {LocalRadio} />
              <Route exact path = "/team" component = {Team} />
              <Route exact path = "/radiopage/:radioId" component = {RadioPage} />
              <Route exact path = "/login" component = {Login} />
              <Route exact path = "/signup" component = {SignUp} />
            </Col>
          </Row>
          <Row className=" align-items-end">
              <Col className="footer-container"><MainFooter className="footer"></MainFooter></Col>
          </Row>
        </Container>
        
      </div>
      </BrowserRouter>
    );
  }
}
