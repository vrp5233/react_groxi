import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";

import { Container, Navbar, Nav, NavItem } from 'react-bootstrap'
class NavigationComponent extends React.Component {
   render() {
      return (
         <header>
            <Container className="navbarWraper">
               <Navbar.Brand>
                  <Link to="/">
                     <img src="images/logo.png" alt="" />
                  </Link>
               </Navbar.Brand>
               <Nav className="navigationMenu">
                  <Nav.Item><Nav.Link to="/">Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link to="/about">About</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link to="/shop">Shop</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link to="/pages">Pages</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link to="/blog">Blog</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link to="/contact">Contact</Nav.Link></Nav.Item>
               </Nav>
               <Nav className="iconMenu">
                  <NavItem><Nav.Link><FontAwesomeIcon icon={faSearch} /></Nav.Link></NavItem>
                  <NavItem><Nav.Link><FontAwesomeIcon icon={faUser} /></Nav.Link></NavItem>
                  <NavItem><Nav.Link><FontAwesomeIcon icon={faHeart} /></Nav.Link></NavItem>
                  <NavItem>
                     <Nav.Link className="shopingCart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="count">0</span>
                     </Nav.Link>
                  </NavItem>
               </Nav>
            </Container>
         </header>
      )
   }
}
export default NavigationComponent;