import React, { useState } from "react";
import {
  UniversalAccess,
  Cash,
  PersonWorkspace,
  People,
} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

const Hero = () => {
  const [spiritualShow, setSpiritualShow] = useState(false);
  const [economicShow, setEconomicShow] = useState(false);
  const [professionalShow, setProfessionalShow] = useState(false);
  const [communityShow, setCommunityShow] = useState(false);

  const handleSpiritualClose = () => setSpiritualShow(false);
  const handleSpiritualShow = () => setSpiritualShow(true);

  const handleEconomicClose = () => setEconomicShow(false);
  const handleEconomicShow = () => setEconomicShow(true);

  const handleProfessionalShow = () => setProfessionalShow(true);
  const handleProfessionalClose = () => setProfessionalShow(false);

  const handleCommunityShow = () => setCommunityShow(true);
  const handleCommunityClose = () => setCommunityShow(false);
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
                  <a className="stretched-link" onClick={handleSpiritualShow}>
                    Spiritual Engagement
                  </a>
                </h4>
                <Modal show={spiritualShow} onHide={handleSpiritualClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Spiritual engagement</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    We dream to see the Burundian Community in Southern Africa
                    living a meaningfully as a result of the living relationship
                    with God through Jesus Christ our savior and Lord{" "}
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </Modal>
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
                  <a className="stretched-link" onClick={handleEconomicShow}>
                    Economic Empowerment
                  </a>
                </h4>
                <Modal show={economicShow} onHide={handleEconomicClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Economic Empowerment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Although the South African government has put in place
                    programs to support immigrants and entrepreneurs to
                    stimulate economic development; Burundian immigrants,
                    refugees and asylum seekers are often afraid to undertake
                    and still face many barriers to establishing and developing
                    their own Business. UBUNTU FAMILY, in partnership with other
                    actors, promote the entrepreneurial culture and offer
                    appropriate support to increase the rate of Burundian
                    entrepreneurs in the Southern African, particularly, South
                    Africa. UBUNTU FAMILY identifies potential entrepreneurs and
                    puts in place a structure to support projects and business
                    creation in the form of a business incubator.
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </Modal>
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
                  <a
                    className="stretched-link"
                    onClick={handleProfessionalShow}
                  >
                    Professional Development
                  </a>
                </h4>
                <Modal show={professionalShow} onHide={handleProfessionalClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Professional Development</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Many Burundians in Southern African countries are econimic
                    migrants. Unfortunately they find the host countries victim
                    to unemployment which has resulted in a good number of
                    Burundians working in indecent jobs. The idea is designed so
                    that Burundians who are around will help their peers through
                    an exchange of experience and information via trainings and
                    workshops. Ubuntu family will focus primarily on the
                    Burundians Professionals Network to ensure the connection
                    and professional development of Burundians through
                    collaborative networking activities and mutual education
                    opportunities through the sharing of lived experiences.
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </Modal>
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
                  <a className="stretched-link" onClick={handleCommunityShow}>
                    Community engagement
                  </a>
                </h4>
                <Modal show={communityShow} onHide={handleCommunityClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Community engagement</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    The community-based approach allows individuals and
                    communities to come together to identify the problem they
                    wish to address,develop collective solutions and choose
                    their own means of action. Community participation also
                    enables community members to influence and actively
                    contribute to the development process and to share it's
                    benefits. UBUNTU FAMILY (UMUNTU N UWUNDI) is already working
                    on this through different activities (General and Mental
                    health Care project,Law clinic Project, social assistance
                    project and cultural space for the conservation of our rich
                    Burundian culture ) The desire outcome should be a united
                    community that is active and right minded in the development
                    and implementation of local policies and usea its skills and
                    knowledge for the development and peace of the host country.
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
