import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {LinkContainer } from'react-router-bootstrap';
// import logo from './logo.png';

export class NavbarHomepage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <Nav className="mr-auto" navbar>
            <NavLink className="menu-img" href="/views/home"><img src="" alt="Logo" /></NavLink>
            <LinkContainer exact to= "/views/home">
              <NavItem onClick={this.toggleNavbar} className="menu-item">
                <NavLink href="/views/home">Home</NavLink>
               </NavItem>
             </LinkContainer>
            <LinkContainer exact to= "#">
                <NavItem onClick={this.toggleNavbar} className="menu-item">
                  <NavLink href="#">Search</NavLink>
                </NavItem>
             </LinkContainer>
             <LinkContainer exact to= "/views/music">   
               <NavItem onClick={this.toggleNavbar}  className="menu-item">
                <NavLink href="/views/music">Music</NavLink>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
