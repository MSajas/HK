import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import emailjs from '@emailjs/browser';


import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g92yydm', 'template_zn1lowj', form.current, 'txUuThNLBXx2xFfJp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h4 className="fw-bold mb-4">Get In Touch</h4>


                      <form  ref={form} onSubmit={sendEmail}>
                <FormGroup className="contact__form ">
                  <Input placeholder="Your Name" type="text" name="user_name" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="user_email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Phone" type="phone" name='user_phone' />
                </FormGroup>
                <FormGroup className="contact__form"> 
                  <textarea
                    rows="5"
                    placeholder="Please let us know How we can help you?" name="message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
  </form>
            </Col>

            <Col lg="5" md="5">
            <div className="contactinfo">
              <div className="contact__info ">
                <h4 className="fw-bold">Contact Information</h4>
                <p className="section__description mb-0">
                7931 Al Sahlan Street-Al Jaradiyah, Riyadh 12771, Saudi Arabia.
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+966 553731215</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">jahfer@hklimousine.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
