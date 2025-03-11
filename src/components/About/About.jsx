import React, { useEffect, useRef } from "react";
import "./About.css";
import { BiRightArrow, BiChart, BiSolidNetworkChart } from "react-icons/bi";
import { FaCogs, FaRegBuilding } from "react-icons/fa";
import { animate } from "framer-motion";
import { motion } from "framer-motion";

const About = () => {
  const Counter = ({ from, to }) => {
    const nodeRef = useRef();
    useEffect(() => {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 5,
        initial: { opacity: 0, scale: 0.1 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.4 },
        viewport: { once: true },
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }, [from, to]);

    return <motion.p ref={nodeRef} className="fs-3 fw-bold" />;
  };

  return (
    <section id="about" className="section">
      <div className="container py-5 ">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className="text-center text-lg-start">
              <h2 className="font-sign">About Us</h2>
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
            <div className="row ">
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
                <div className="col-12 col-md-6 p-3 " key={index}>
                  <div className="tile shadow rounded p-4 h-100">
                    <span className="fs-5 text-black">{tile.icon}</span>
                    <h4 className="mt-2">{tile.title}</h4>
                    <p>{tile.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="image-container container-fluid p-0 position-relative">
        <div className="img"></div>
        <div className="overlay-content d-flex flex-column justify-content-center align-items-center text-white position-absolute top-0 left-0 w-100 h-100 z-3">
          <div className="row w-100 text-center row-gap-3">
            {[
              { number: 232, label: "Clients" },
              { number: 150, label: "Projects" },
              { number: 98, label: "Satisfaction" },
              { number: 24 / 7, label: "Support" },
            ].map((item, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="d-flex flex-column align-items-center justify-content-center gap-1 ">
                  <Counter from={0} to={item.number} />
                  <span className="fs-4 fw-semibold text-uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
