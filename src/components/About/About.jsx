import React from "react";
import "./About.css";
import { BiRightArrow, BiChart, BiSolidNetworkChart } from "react-icons/bi";
import { FaCogs, FaRegBuilding } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center h-100"
      >
        <div className="row row-gap-4">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className="text-center text-lg-start">
              <h2 className="text-uppercase font-sign">About Us</h2>
              <h4 className="font-mono">Lorem ipsum dolor sit amet.</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis, odio? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Velit exercitationem non tenetur dicta cumque
                possimus.
              </p>
              <button className="btn btn-dark d-flex gap-2 align-items-center m-lg-0 m-auto">
                See More <BiRightArrow />
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="row row-gap-4">
              {[
                {
                  icon: <FaRegBuilding aria-hidden="true" />,
                  title: "Business Growth",
                  desc: "Helping businesses scale with strategic insights and expert guidance.",
                },
                {
                  icon: <BiChart aria-hidden="true" />,
                  title: "Market Analysis",
                  desc: "Providing data-driven market insights to drive informed decision-making.",
                },
                {
                  icon: <FaCogs aria-hidden="true" />,
                  title: "Technical Expertise",
                  desc: "Empowering businesses with modern technical solutions and innovations.",
                },
                {
                  icon: <BiSolidNetworkChart aria-hidden="true" />,
                  title: "Networking Solutions",
                  desc: "Seamless networking infrastructure for high-performance connectivity.",
                },
              ].map((tile, index) => (
                <div className="col-12 col-md-6" key={index}>
                  <div className="tile border border-2 border-danger rounded-4 p-3 d-flex flex-column h-100">
                    <span className="fs-5 text-black">{tile.icon}</span>
                    <h4 className="mt-2">{tile.title}</h4>
                    <p>{tile.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="image-container position-relative">
        <div className="img"></div>
        <div className="overlay-content d-flex flex-column justify-content-center align-items-center text-white position-absolute top-0 left-0 w-100 h-100 z-3">
          <div className="row w-100 text-center row-gap-3">
            {[
              { number: "232+", label: "Clients" },
              { number: "150+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((item, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="d-flex flex-column align-items-center justify-content-center gap-1 ">
                  <span className="fs-3 fw-bold">{item.number}</span>
                  <span className="fs-4 fw-semibold text-uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
