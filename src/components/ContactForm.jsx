import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  return (
    <div className="bg-dark opacity-75 pb-3">
      <h1 className="text-warning text-center"> Get in Touch with us</h1>
      <Form>
        <FormGroup className="text-center">
          <FormLabel className="text-light">Enter Your Name</FormLabel>
          <FormControl
            className="text-dark mb-3"
            placeholder="enter name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="text-center">
          <FormLabel className="text-light">Enter Your Phone Number</FormLabel>
          <FormControl
            className="text-dark mb-3"
            placeholder="enter phone number"
            type="number"
          ></FormControl>
        </FormGroup>
        <FormGroup className="text-center">
          <FormLabel className="text-light mb-3">Enter Your Email</FormLabel>
          <FormControl
            className="text-dark"
            placeholder="enter your email"
            type="text"
          ></FormControl>
        </FormGroup>
        <FormGroup className="text-center">
          <FormLabel className="text-light mb-3">
            Why are you contacting us?
          </FormLabel>
          <FormControl
            as="textarea"
            className="text-dark mb-3"
            placeholder="Enter your message here"
            rows={5}
          />
        </FormGroup>
        <div className="text-center">
          <Button className="btn-success">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
