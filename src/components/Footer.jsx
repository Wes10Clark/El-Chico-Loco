import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white pb-3 pt-3">
      <div class="row">
        <div class="col-md-4">
          <h4>Contact Information</h4>
          <p>123 Main Street</p>
          <p>Anytown, USA 12345</p>
          <p>555-555-5555</p>
          <p>info@yourrestaurant.com</p>
        </div>
        <div class="col-md-4">
          <h4>Hours of Operation</h4>
          <p>Monday-Thursday: 11am-9pm</p>
          <p>Friday-Saturday: 11am-10pm</p>
          <p>Sunday: 11am-8pm</p>
        </div>
        <div class="col-md-4">
          <h4>Follow Us</h4>
          <div className="d-flex justify-content-around">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p class="text-center">Copyright © El Chico Loco</p>
    </Container>
  );
};

export default Footer;
