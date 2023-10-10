import React from "react";
import Logo from "../constants/Logo";
import TopNav from "./TopNav";
import { ChevronDown, List, X } from "react-bootstrap-icons";

const Nav = () => {
  return (
    <>
      <TopNav />
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <Logo />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <List className="mobile-nav-toggle mobile-nav-show bi bi-list"></List>
          <X className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></X>
        </div>
      </header>
    </>
  );
};

export default Nav;
