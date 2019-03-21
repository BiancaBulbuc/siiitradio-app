
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
import './Side-Menu.css';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

export default class Navigation extends React.Component {
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
            <NavLink className="menu-img" href="/views/home"><img src={logo} alt="Logo" /></NavLink>
            <LinkContainer exact to= "#">
                <NavItem onClick={this.toggleNavbar} className="menu-item">
                  <NavLink href="#">Search</NavLink>
                </NavItem>
             </LinkContainer>
             <LinkContainer exact to= "/views/home">
              <NavItem onClick={this.toggleNavbar} className="menu-item">
                <NavLink href="/views/home">Home</NavLink>
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
                 <NavLink href="/views/settings">Settings</NavLink>
               </NavItem>
             </LinkContainer>
             <LinkContainer exact to= "/views/logout">  
               <NavItem onClick={this.toggleNavbar} className="menu-item">
                 <NavLink href="/views/logout">Log out</NavLink>
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
            <NavLink  href="/views/home"><img src={logo} alt="Logo" /></NavLink>
            </div>
        </Container>
        </Navbar>
     
    </header>
    );
}
}