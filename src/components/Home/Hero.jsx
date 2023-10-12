import React from "react";
import { UniversalAccess, Cash, PersonWorkspace, People } from "react-bootstrap-icons";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>
              Welcome to <span>Ubuntu family</span>
            </h2>
            <p>
              We are an organization based in Capetown. Our goal is to prepare
              Burundian people to thrive.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <img
              src="/hero-img.svg"
              className="img-fluid"
              alt="Hero img"
              data-aos="zoom-out"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>

      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5 ">
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <UniversalAccess className="bi bi-easel"></UniversalAccess>
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Spiritual Engagement
                  </a>
                </h4>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <Cash className="bi bi-gem"></Cash>
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Economic Empowerment
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <PersonWorkspace className="bi bi-gem"></PersonWorkspace>
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Professional Development
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <People className="bi bi-gem"></People>
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Community engagement
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
