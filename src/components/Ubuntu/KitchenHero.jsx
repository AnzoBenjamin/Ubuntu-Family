import React from "react";

const KitchenHero = () => {
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
              src="/ubuntu-10.jpg"
              className="img-fluid"
              alt="Hero img"
              data-aos="zoom-out"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenHero;
