import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch,} from 'react-router-dom';
// import { NavbarHomepage } from './shared/navbar/NavbarHomepage';
// import {FacebookGoogleLogin} from './shared/FacebookGoogleLogin/FacebookLoginButton';

import { SideMenu } from './shared/side-menu/SideMenu';
import { Search } from './shared/search/Search';
import { Application } from './views/application/Application';
import { MainFooter } from './shared/footer/MainFooter';
import { Homepage } from './views/Homepage/Homepage';
import { HomeRadio } from './views/application/home/HomeRadio';
import { MusicRadio } from './views/application/music/MusicRadio';
import { NewsRadio } from './views/application/news/NewsRadio';
import { LocalRadio } from './views/application/local-radios/LocalRadio';
import { Team } from './views/application/team/team';
import { RadioPage } from './views/application/radiopage/RadioPage';
import { Favorites } from './views/application/favorites/Favorites';
import { Container, Row, Col } from 'reactstrap';

import { AccountProfile } from './views/application/AccountProfile/index';
import { AccountProvider } from './views/application/AccountProfile/AccountProvider';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FacebookLoginButton } from './shared/FacebookLoginButton/FacebookLoginButton';

// import UserContextProvider from './shared/UserContext/UserContextProvider';


 

export const Login = () => (
  <AccountProvider>
  <Router>
   <React.Fragment>
    <SideMenu />
    <Switch>
      <Route 
        exact 
        path="/ "
        render={() => <div>Home</div>}
      />
      <Route 
        exact 
        path="/account/profile "
        component={AccountProfile} 
      />
    </Switch>
  </React.Fragment>
  </Router>
</AccountProvider>
); 

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(user) {
    this.setState({ user });
  }
  


  render() {
   
    return (
      <BrowserRouter>
      <div className="App">
      <Container>
          <Row className="app-main-container">
            <SideMenu className="app-side-menu"></SideMenu>
            <Search className="search-bar"></Search> 
            
            
            <Col  className="page-views">
              <Route exact path = "/Application" component = {Application} />
              <Route exact path = "/homepage" component = {Homepage} />
              <Route exact path = "/Application" component = {Application} />
              <Route exact path = "/home" component = {HomeRadio} />
              <Route exact path = "/MusicRadio" component = {MusicRadio} />
              <Route exact path = "/news" component = {NewsRadio} />
              <Route exact path = "/local-radios" component = {LocalRadio} />
              <Route exact path = "/team" component = {Team} />
              <Route exact path = "/favorites" component = {Favorites} />
              <Route exact path = "/radiopage/:radioId" component = {RadioPage} />
              <Route exact path = "/social-login" component = {FacebookLoginButton}/>
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
