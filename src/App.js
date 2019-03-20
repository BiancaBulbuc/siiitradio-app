import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import SideMenu from './shared/side-menu/Side-Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MusicRadio } from './views/music/MusicRadio';
import { NewsRadio } from './views/news/NewsRadio';
import { LocalRadio } from './views/local-radios/LocalRadio';
import { HomeRadio } from './views/home/HomeRadio';
import { Team } from './views/team/team';
import { RadioPage } from './views/radiopage/RadioPage';
import { MainFooter } from './shared/footer/MainFooter';
import { Container, Row, Col } from 'reactstrap';



class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Container>
          <Row className="app-main-container">
            <Col className="menu">
              <SideMenu className="side-menu" site_name="podcast_app"></SideMenu>
            </Col>
            <Col  className="page-views">
              <Route exact path = "/views/home" component = {HomeRadio} />
              <Route exact path = "/views/music" component = {MusicRadio} />
              <Route exact path = "/views/news" component = {NewsRadio} />
              <Route exact path = "/views/local-radios" component = {LocalRadio} />
              <Route exact path = "/views/team" component = {Team} />
              <Route exact path = "/views/radiopage/:radioId" component = {RadioPage} />
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

export default App;
