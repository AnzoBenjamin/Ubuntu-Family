import React from "react";
import Logo from "../constants/Logo";
import TopNav from "./TopNav";
import { List, X } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <>
      <TopNav />
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Logo />
          <Navbar expand="lg" className="bg-light">
            <Container className="justify-content-end">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="position-absolute z-3" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto bg-light">
                  <Nav.Link href="/#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#faqs">FAQs</Nav.Link>
                  <Nav.Link href="#recent-posts">Recent posts</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default Navigation;
 