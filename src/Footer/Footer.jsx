import React from 'react'
import { Twitter, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'

const Footer = () => {
  return (    
  <footer id="footer" class="footer">

  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-5 col-md-12 footer-info">
        <a href="index.html" class="logo d-flex align-items-center">
          <span>Ubuntu Family</span>
        </a>
        <p>A global Burundian Organization in diaspora. It creates a platform to engage Burundians and organizations through spiritual fellowship, economic empowerment, professional development and community engagement.</p>
        <div class="social-links d-flex mt-4">
          <a href="#" class="twitter"><Twitter class="bi bi-twitter"></Twitter></a>
          <a href="#" class="facebook"><Facebook class="bi bi-facebook"></Facebook></a>
          <a href="#" class="instagram"><Instagram class="bi bi-instagram"></Instagram></a>
          <a href="#" class="linkedin"><Linkedin class="bi bi-linkedin"></Linkedin></a>
        </div>
      </div>

      <div class="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#ero">Home</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><a href="/ubuntu-ways">Ubuntu Ways</a></li>
          <li><a href="/ubuntu-kitchens">Ubuntu Kitchens</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
          Random street<br/>
          Cape Town<br/>
          South Africa<br/><br/>
          <strong>Phone:</strong> +1 5589 55488 55<br/>
          <strong>Email:</strong> ubuntuwayssa@gmail.com<br/>
          ubuntu-kitchens@ubereats.com<br/>
        </p>

      </div>

    </div>
  </div>

  <div class="container mt-4">
    <div class="copyright">
      &copy; Copyright <strong><span>Ubuntu</span></strong>. All Rights Reserved
    </div>
  </div>

</footer>
  )
}

export default Footer