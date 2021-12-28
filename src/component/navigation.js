import React from "react";
import { Link, NavLink } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
               {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
               {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                  <Nav className="navigationMenu">
                     <Nav.Item><Link to="/">Home</Link></Nav.Item>
                     <Nav.Item><Link to="/about">About</Link></Nav.Item>
                     <Nav.Item><Link to="/shop">Shop</Link></Nav.Item>
                     <Nav.Item><Link to="/pages">Pages</Link></Nav.Item>
                     <Nav.Item><Link to="/blog">Blog</Link></Nav.Item>
                     <Nav.Item><Link to="/contact">Contact</Link></Nav.Item>
                  </Nav>
               {/* </Navbar.Collapse> */}
               <Nav className="iconMenu">
                  <Nav.Item><Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link></Nav.Item>
                  <Nav.Item><Link to="/login"><FontAwesomeIcon icon={faUser} /></Link></Nav.Item>
                  <Nav.Item><Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link></Nav.Item>
                  <Nav.Item>
                     <Link to="/cart" className="shopingCart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="count">0</span>
                     </Link>
                  </Nav.Item>
               </Nav>
            </Container>
         </header>
      )
   }
}
export default NavigationComponent;