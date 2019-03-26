
import React from "react";
import {
Collapse,
Container,
Navbar,
NavbarToggler,
Nav,
NavItem,
NavLink
} from "reactstrap";
import {LinkContainer } from 'react-router-bootstrap';
// import './Side-Menu.css';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

export class NavbarHomepage extends React.Component {
  constructor(props) {
      super(props);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.closeNavbar = this.closeNavbar.bind(this);
      this.state = {
      collapsed: true
      };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
      });
  }

  closeNavbar() {
      if (this.state.collapsed === true) {
      this.toggleNavbar();
      }
  }

  render() {
      return (
        <header>
        <Navbar className="navigation__navbar side-menu" light expand="md" >
        <Container >
        <div className="menu">
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="menu navigation-menu" isOpen={!this.state.collapsed} navbar>
            <Nav className="mr-auto" navbar>
            <LinkContainer exact to= "/homepage">
              <NavItem onClick={this.toggleNavbar} className="menu-item">
              <NavLink className="menu-img" href="/homepage"><img src={logo} alt="Logo" /></NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact to= "/home">
              <NavItem onClick={this.toggleNavbar} className="menu-item">
                <NavLink href="/home">Home in home page</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact to= "/music">
                <NavItem onClick={this.toggleNavbar} className="menu-item">
                  <NavLink href="/music">Search</NavLink>
                </NavItem>
            </LinkContainer>
            <LinkContainer exact to= "/music">   
              <NavItem onClick={this.toggleNavbar}  className="menu-item">
                <NavLink href="/music">Music</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact to= "/views/news">  
              <NavItem onClick={this.toggleNavbar}  className="menu-item">
                <NavLink href="/views/news">News</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact to= "/views/local-radios">  
              <NavItem onClick={this.toggleNavbar} className="menu-item">
                <NavLink href="/views/local-radios">Local Radios</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact to= "/views/favourites">  
              <NavItem onClick={this.toggleNavbar}  className="menu-item">
                <NavLink href="/views/favourites">Favourites</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact to= "/views/settings">  
              <NavItem onClick={this.toggleNavbar}  className="menu-item">
                <NavLink href="/views/settings">Account</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact to= "/views/team">  
              <NavItem onClick={this.toggleNavbar} className="menu-item">
                <NavLink href="/views/team">SiiT Team </NavLink>
              </NavItem>
            </LinkContainer>
            </Nav>
            </Collapse>
            </div>
            <div className="logo-nav">
            <NavLink  href="/views/Homepage"><img src={logo} alt="Logo" /></NavLink>
            </div>
        </Container>
        </Navbar>
    
    </header>
      );
  }
}