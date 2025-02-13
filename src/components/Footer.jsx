import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="column">
          <h2 className="logo">LOGO</h2>
          <p className="text">
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div className="social-icons">
            <span className="icon">
              <FontAwesomeIcon icon={faXTwitter} />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </div>
        </div>

        <div className="column">
          <h3 className="heading">Useful Links</h3>
          <ul className="list">
            <li className="item">Home</li>
            <li className="item">About us</li>
            <li className="item">Services</li>
            <li className="item">Terms of service</li>
            <li className="item">Privacy policy</li>
          </ul>
        </div>

        <div className="column">
          <h3 className="heading">Our Services</h3>
          <ul className="list">
            <li className="item">Web Design</li>
            <li className="item">Web Development</li>
            <li className="item">Product Management</li>
            <li className="item">Marketing</li>
            <li className="item">Graphic Design</li>
          </ul>
        </div>

        <div className="column">
          <h3 className="heading">Contact Us</h3>
          <p className="text">A108 Adam Street</p>
          <p className="text">New York, NY 535022</p>
          <p className="text">United States</p>
          <p className="bold-text">Phone: +1 5589 55488 55</p>
          <p className="bold-text">Email: info@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © Copyright <b>Company Name</b> All Rights Reserved
        </p>
        <p className="designer">
          Designed by <span>Akash K</span>
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background: #f8f9fa;
  padding: 2rem 0 0;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 0 50px;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .text {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
  .bold-text {
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }
  .list {
    list-style: none;
    padding: 0;
  }
  .item {
    font-size: 14px;
    color: #666;
    margin-bottom: 6px;
    cursor: pointer;
    &:hover {
      color: #e84545;
    }
  }
  .social-icons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  .icon {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #e84545;
      color: white;
    }
  }
  .footer-bottom {
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
    background: #e9ecef;
  }
  .copyright,
  .designer {
    font-size: 14px;
    color: #666;
  }
  .designer span {
    color: #e84545;
    font-weight: bold;
    cursor: pointer;
  }
`;
