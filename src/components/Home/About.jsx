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
              We dream to see the Burundian Community in Southern Africa
              Countries living the meaningful live as the result of SELF
              IDENTITY DISCOVERY which we find in from the fellowship and living
              relationship with God through Jesus Christ our savior and Lord
            </p>
            <p>
              The community-bases approach allows individuals and communities to
              come together to identify the problem they wish to address,develop
              collective solutions and choose their own means of action.
              Community participation also enables community members to
              influence and actively contribute to the development process and
              to share it's benefits. UBUNTU FAMILY (UMUNTU N UWUNDI) is already
              working on this through different activities (General and Mental
              health Care project,Law clinic Project, social assistance project
              and cultural space for the conservation of our rich Burundian
              culture ) The desire outcome should be a united community that is
              active and right minded in the development and implementation of
              local policies and usea its skills and knowledge for the
              development and peace of the host country.
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
                  src="/ubuntu-3.jpg"
                  className="img-fluid rounded-4"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox play-btn"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
