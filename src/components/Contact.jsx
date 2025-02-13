import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="head">
        <h2 className="title">Contact</h2>
        <p className="subtitle">
          Reach out to us for any inquiries or support.
        </p>
      </div>

      <div className="container">
        <div className="contact-grid">
          <ContactBox>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <h3>Address</h3>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
          </ContactBox>

          <ContactBox>
            <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
            <h3>Call Us</h3>
            <p>+1 5589 55488 55</p>
            <p>+1 6678 254445 41</p>
          </ContactBox>

          <ContactBox>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h3>Email Us</h3>
            <p>info@example.com</p>
            <p>contact@example.com</p>
          </ContactBox>

          <ContactBox>
            <FontAwesomeIcon icon={faClock} className="icon" />
            <h3>Open Hours</h3>
            <p>Monday - Friday</p>
            <p>9:00 AM - 05:00 PM</p>
          </ContactBox>
        </div>
        <ContactForm>
          <div className="input-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea rows={5} placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </ContactForm>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: auto;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      place-items: center;
    }
    .contact-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;

const ContactBox = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .icon {
    font-size: 2rem;
    color: #e84545;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #777;
    margin: 5px 0;
  }
`;

const ContactForm = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .input-row {
    display: flex;
    gap: 1rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  textarea {
    resize: vertical;
    min-height: 169px;
    max-height: 300px;
  }

  button {
    width: 100%;
    padding: 10px;
    background: #e84545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default Contact;
