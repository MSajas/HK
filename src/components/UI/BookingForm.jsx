import React, { useRef } from 'react';
import "../../styles/booking-form.css";
import { Form, FormGroup, Row } from "reactstrap";
import emailjs from '@emailjs/browser';
 

const BookingForm = () => {
  const form = useRef();

  const submitHandler = (e) => {
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
    <form className='booking' ref={form} onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Name" name="user_name" />
      </FormGroup>
     

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" name="user_email" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="number" placeholder="Phone Number" name="user_phone"/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Address" name="user_address" />
      </FormGroup>
 

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write luggage details"
          name="message"
        ></textarea>
      </FormGroup>
      <button className=" contact__btn" type="submit">
                  Submit
                </button>
                 
    </form>
  );
  
};

export default BookingForm;
