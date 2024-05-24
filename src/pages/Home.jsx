import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
             {/* <Col lg="4" md="4">*/}
                <div className="find__cars-left">
                  <h2>WHY US?</h2>
                </div>
              
              {/*</Col>*/}

             {/*} <Col lg="8" md="8" sm="12">*/}
              <div className="find__cars-right">
                <p> HK Limo service is registered as a Transportation and a Tourism Company. Basically, HK is a Limo Company and Special Tours is a Destination Management Company (DMC) in Saudi Arabia.</p>
                 
                <h6 >CANCELLATION</h6>
                  <p>Worried about how to cancel a ride? No Issues! Cancellation of rides are Limo Services within 3 hours of booking a ride exclusively applicable only for short trips.</p>
                   
                <h6>24/7 SUPPORT</h6>  
                <p>Don’t let any query remain unresolved, just ring it up at our 24X7 Support and resolve all your queries easily.</p>
                <h6>FIXED RATES</h6> 
                <p>No hidden charges and no hidden surprises, We offer fixed prices that includes all taxes, tolls & fuel.</p>
                <h6>PREMIUM CARS</h6> 
                <p>Quality car hire fleet in Saudi Arabia with an average fleet age of 3 years.</p>
                

  </div>
  {/*</Col>*/}
            </Row>
          </Container>
        </div>
      </section>
      
      {/* =========== about section ================ */}
      <section><AboutSection /></section>
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"> Please find the below services type we normally provide which will suit each and every customers schedule</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
            <a href="/blogs" class="btn btn-primary">Find more services in details</a>
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      {/*<section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
            </section>*/}
    </Helmet>
  );
};

export default Home;
