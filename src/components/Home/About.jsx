import React from "react";
import { CheckCircleFill } from "react-bootstrap-icons";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>
            UBUNTU FAMILY (UMUNTU N UWUNDI) is a global organisation it creates
            a platform to engage Burundians and organisations through spiritual
            sellowship, economic empowerment, professional development and
            community engagement.
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>A global Burundian organization in diaspora</h3>
            <img
              src="/ubuntu-2.jpg"
              className="img-fluid rounded-4 mb-4"
              alt=""
            />
            <p>
              UBUNTU FAMILY is a organization based in Capetown. Our goal is to
              prepare Burundian people thrive, by combining and strengthening,
              volunteering and social action to links to self identity
              discovery, employment, education through different projects
              executed by the Organizations within the UBUNTU FAMILY
            </p>
            <p>
            </p>
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <CheckCircleFill className="bi bi-check-circle-fill"></CheckCircleFill>{" "}
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <CheckCircleFill className="bi bi-check-circle-fill"></CheckCircleFill>{" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <CheckCircleFill className="bi bi-check-circle-fill"></CheckCircleFill>{" "}
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>

              <div className="position-relative mt-4">
                <img
                  src="/ubuntu-10.jpg"
                  className="img-fluid rounded-4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
