import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="row row-gap-3">
        <div className="col-6 col-lg h-100">
          <h2 className="logo">LOGO</h2>
          <p className="text">
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div className="container-fluid d-flex justify-content-evenly p-3 text-center gap-4 fs-4">
            <FaTwitter className="icon twitter" />
            <FaFacebook className="icon facebook" />
            <FaInstagram className="icon instagram" />
            <FaLinkedinIn className="icon linkedin" />
          </div>
        </div>

        <div className="col-6 col-lg h-100">
          <h3 className="heading">Useful Links</h3>
          <ul className="navbar-nav text-capitalize">
            <li className="nav-item " id="home">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item" id="home">
              <a href="#about">about</a>
            </li>
            <li className="nav-item" id="home">
              <a href="#services">services</a>
            </li>

            <li className="item">Terms of service</li>
            <li className="item">Privacy policy</li>
          </ul>
        </div>

        <div className="col-6 col-lg h-100">
          <h3 className="heading">Our Services</h3>
          <ul className="navbar-nav align-items-between justify-content-between">
            <li className="nav-item">Web Design</li>
            <li className="nav-item">Web Development</li>
            <li className="nav-item">Product Management</li>
            <li className="nav-item">Marketing</li>
            <li className="nav-item">Graphic Design</li>
          </ul>
        </div>

        <div className="col-6 col-lg h-100">
          <h3 className="heading">Contact Us</h3>
          <p className="text">A108 Adam Street</p>
          <p className="text">New York, NY 535022</p>
          <p className="text">United States</p>
          <p className="bold-text">Phone: +1 5589 55488 55</p>
          <p className="bold-text">Email: info@example.com</p>
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col-12">
          <p className="copyright">
            © Copyright <b>Name</b> All Rights Reserved
          </p>
        </div>
        <div className="col-12">
          <p className="designer">
            Designed by <span>Akash K</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
