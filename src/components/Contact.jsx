import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="container">
        <h2 className="title">Contact</h2>
        <p className="subtitle">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit.
        </p>
        <div className="content">
          <div className="info-boxes">
            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <h3>Address</h3>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
            </div>
            <div className="info-box">
              <FaPhone className="icon" />
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
              <p>+1 6678 254445 41</p>
            </div>
            <div className="info-box">
              <FaEnvelope className="icon" />
              <h3>Email Us</h3>
              <p>info@example.com</p>
              <p>contact@example.com</p>
            </div>
            <div className="info-box">
              <FaClock className="icon" />
              <h3>Open Hours</h3>
              <p>Monday - Friday</p>
              <p>9:00 AM - 05:00 PM</p>
            </div>
          </div>

          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding: 3rem 1rem;
  background: #fff;

  .title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #e84545;
  }

  .subtitle {
    color: #777;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .info-boxes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .info-box {
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 2rem;
    color: #e84545;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    display: flex;
    gap: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    background: #e84545;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  button:hover {
    background: #d13434;
  }

  @media (min-width: 768px) {
    .content {
      flex-direction: row;
    }
  }
`;

export default Contact;
