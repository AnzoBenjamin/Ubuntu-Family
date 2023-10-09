import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'

const Services = () => {
  return (
    <section id="services" className="services sections-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Services</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>

        <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6">
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <h3>Spiritual Engagement</h3>
              <p>We dream to see the Burundian community in Southern Africa living the meaningful life that we find from fellowship and having a relationship with God through our Lord and saviour, Jesus Christ</p>
              <a href="#" className="readmore stretched-link">Read more <ArrowRight className="bi bi-arrow-right"></ArrowRight></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <h3>Economic Empowerment</h3>
              <p>We encourage ourselves to contribute in the economic developmennt of the countries as immigrants or refugges and asylum seekers.</p>
              <a href="#" className="readmore stretched-link">Read more <ArrowRight className="bi bi-arrow-right"></ArrowRight></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <h3>Professional Development</h3>
              <p>We focus primarily on a Burundian network to ensure that our fellow country men are in contact and grow professionally and socially through collaborative networking activities and mutual education opportunities through the sharing of livid experiences.</p>
              <a href="#" className="readmore stretched-link">Read more <ArrowRight className="bi bi-arrow-right"></ArrowRight></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <h3>Community engagement</h3>
              <p>Allows individuals and communities to come together to identify the problem they wish to address, develop collective solutions and choose their own means of action.</p>
              <a href="#" className="readmore stretched-link">Read more <ArrowRight className="bi bi-arrow-right"></ArrowRight></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services