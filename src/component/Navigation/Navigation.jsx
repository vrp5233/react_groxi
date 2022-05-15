import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import './Navigation.css'

const NavigationComponent = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("#header");
    const scrollTop = window.scrollY;
    scrollTop >= 10
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <Navbar id="header" expand="lg">
      <Container className="navbarWraper">
        <Navbar.Brand>
          <Link to="/">
            <img src="images/logo.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navigationMenu">
            {NavLinks.map((link, i) => (
              <Nav.Item key={i}>
                <NavLink exact to={link.path} >
                  {link.label}
                </NavLink>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>

        <Nav className="iconMenu">
          <Nav.Item>
            <NavLink exact to="/search">
              <FontAwesomeIcon icon={faSearch} />
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink exact to="/login">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink exact to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink exact to="/cart" className="shopingCart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="count">0</span>
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationComponent;
