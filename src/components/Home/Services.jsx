import React from "react";
import {
  ArrowRight,
  Cash,
  People,
  PersonWorkspace,
  UniversalAccess,
  CupHotFill,
} from "react-bootstrap-icons";

const Services = () => {
  return (
    <section id="services" className="services sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Engaging Burundians and Organizations through Spiritual Fellowship,
            Economic Empowerment, Professional development and community
            engagement.{" "}
          </p>
        </div>

        <div
          className="row gy-4 justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6">
            <div className="service-item  position-relative">
              <div className="icon">
                <Cash className="bi bi-activity img-icon"></Cash>
              </div>
              <h3>Ubuntu Ways</h3>
              <p>
                Intervening in the money exchange and transfer for Burundians
                who are residing South Africa.
              </p>
              <a href="/ubuntu-ways" className="readmore stretched-link">
                Read more{" "}
                <ArrowRight className="bi bi-arrow-right"></ArrowRight>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <CupHotFill className="bi bi-broadcast img-icon"></CupHotFill>
              </div>
              <h3>Ubuntu Kitchens</h3>
              <p>
                Catering our East African recipes with the TASTE OF NYUMBANI.
              </p>
              <a href="/ubuntu-kitchens" className="readmore stretched-link">
                Read more{" "}
                <ArrowRight className="bi bi-arrow-right"></ArrowRight>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
