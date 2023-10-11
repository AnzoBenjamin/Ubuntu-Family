import React from 'react'
import { Accordion } from 'react-bootstrap'

const FAQs = () => {
  return (
<section id="faq" className="faq">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-4">
            <div className="content px-xl-5">
              <h3>Frequently Asked <strong>Questions</strong></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>
          </div>

          <div className="col-lg-8">

            <Accordion defaultActiveKey={"0"} id="faqlist" data-aos="fade-up" data-aos-delay="100">

              <Accordion.Item eventKey='0'>
                <Accordion.Header id="flush-headingOne">
                  <div type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="num">1.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </div>
                </Accordion.Header>
                <div id="faq-content-1" data-bs-parent="#faqlist">
                  <Accordion.Body>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </Accordion.Body>
                </div>
              </Accordion.Item>

              <Accordion.Item eventKey='1'>
                <Accordion.Header id="flush-headingOne">
                  <div type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="num">2.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </div>
                </Accordion.Header>
                <div id="faq-content-1" data-bs-parent="#faqlist">
                  <Accordion.Body>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </Accordion.Body>
                </div>
              </Accordion.Item>

              <Accordion.Item eventKey='2'>
                <Accordion.Header id="flush-headingOne">
                  <div type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="num">3.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </div>
                </Accordion.Header>
                <div id="faq-content-1" data-bs-parent="#faqlist">
                  <Accordion.Body>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </Accordion.Body>
                </div>
              </Accordion.Item>

              <Accordion.Item eventKey='3'>
                <Accordion.Header id="flush-headingOne">
                  <div type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="num">4.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </div>
                </Accordion.Header>
                <div id="faq-content-1" data-bs-parent="#faqlist">
                  <Accordion.Body>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </Accordion.Body>
                </div>
              </Accordion.Item>

              <Accordion.Item eventKey='4'>
                <Accordion.Header id="flush-headingOne">
                  <div type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="num">5.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </div>
                </Accordion.Header>
                <div id="faq-content-1" data-bs-parent="#faqlist">
                  <Accordion.Body>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </Accordion.Body>
                </div>
              </Accordion.Item>

            </Accordion>

          </div>
        </div>

      </div>
    </section>  )
}

export default FAQs