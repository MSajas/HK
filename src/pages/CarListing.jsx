import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import "bootstrap";
import carDataF from '../assets/data/carDataF';
import carDataB from "../assets/data/carDataB";
import carDatasuv from "../assets/data/carDatasuv";
import carDatasedan from "../assets/data/carDatasedan";
import carDatav from "../assets/data/carDatav";

const CarListing = () => {
  return (
    <Helmet title="Cars"> 
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Reserve by your choice 
                </span>
       </div>

       <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#All">All</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#Firstclass">First class</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#Businessclass">Business class</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#SUV">SUV</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#Sedan">Sedan</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#Vanandcoaches">Van and coaches</a>
  </li>
</ul>

<div class="tab-content ">
  
  <div class="tab-pane container active " id="All">
   <Row>
  {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
      </Row>    
 
    
    </div>
  <div class="tab-pane container fade" id="Firstclass">
    <Row>
  {carDataF.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
</Row>

  </div>
  <div class="tab-pane container fade" id="Businessclass">
  <Row>
  {carDataB.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
      </Row>    


  </div>
  <div class="tab-pane container fade" id="SUV">
  <Row>
  {carDatasuv.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
      </Row>    


  </div>
  <div class="tab-pane container fade" id="Sedan">

  <Row>
  {carDatasedan.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
      </Row>    

  </div>
  <div class="tab-pane container fade" id="Vanandcoaches">
  <Row>
  {carDatav.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
      </Row>    


  </div>
</div>



            </Col>
            </Row>
        </Container>
      </section>
    </Helmet>
            );
          }; 
            

            

export default CarListing;
