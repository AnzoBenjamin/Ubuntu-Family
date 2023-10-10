import React from "react";
import {
  Envelope,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "react-bootstrap-icons";

const TopNav = () => {
  return (
    <section id="topbar" className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <Envelope className="bi bi-envelope d-flex align-items-center"></Envelope>
            <a className="text-white text-decoration-none" href="mailto:ubuntuwayssa@gmail.com">ubuntuwayssa@gmail.com</a>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Envelope className="bi bi-envelope d-flex align-items-center"></Envelope>
            <a className="text-white text-decoration-none" href="mailto:ubuntu-kitchens@ubereats.com">ubuntu-kitchens@ubereats.com</a>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Phone className="bi bi-phone d-flex align-items-center"></Phone>
            <span>+1 5589 55488 55</span>
          </div>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#" className="twitter">
            <Twitter className="bi bi-twitter"></Twitter>
          </a>
          <a href="#" className="facebook">
            <Facebook className="bi bi-facebook"></Facebook>
          </a>
          <a href="#" className="instagram">
            <Instagram className="bi bi-instagram"></Instagram>
          </a>
          <a href="#" className="linkedin">
            <Linkedin className="bi bi-linkedin"></Linkedin>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
