import React from "react";
import test1 from "../../assets/testimonials/testimonials-1.jpg";
import test2 from "../../assets/testimonials/testimonials-2.jpg";
import test3 from "../../assets/testimonials/testimonials-3.jpg";
import test4 from "../../assets/testimonials/testimonials-4.jpg";
import test5 from "../../assets/testimonials/testimonials-5.jpg";
import { BsQuote, BsStarFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const feedback = [
    {
      img: test1,
      name: "John Doe",
      role: "CEO, Company",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
    },
    {
      img: test2,
      name: "Jane Smith",
      role: "Designer",
      feedback:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      img: test3,
      name: "Alice Johnson",
      role: "Developer",
      feedback:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      img: test4,
      name: "Mark Wilson",
      role: "Manager",
      feedback:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: test5,
      name: "Sarah Lee",
      role: "Freelancer",
      feedback:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
    },
  ];

  return (
    <section
      className="testimonials d-flex flex-column justify-content-evenly"
      id="testimonials"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 text-center text-md-start mb-4 d-flex flex-column justify-content-center">
            <h2 className="font-sign">Testimonials</h2>
            <p className="font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae illum vero vel ratione repellendus ex excepturi
              reprehenderit accusamus voluptate similique alias ullam quas,
              perferendis harum!
            </p>
          </div>

          <div className="col-12 col-lg-6">
            <div
              id="carouselExampleIndicators"
              className="carousel slide h-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {feedback.map((item, idx) => (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  >
                    <div className="d-flex align-items-center p-3 justify-content-center justify-content-md-start">
                      <img
                        loading="lazy"
                        src={item.img}
                        alt={item.name}
                        className="rounded-circle img-fluid"
                        style={{
                          width: "25%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div className="ms-3">
                        <h5 className="mb-1">{item.name}</h5>
                        <p className="text-muted mb-2">{item.role}</p>
                        <div className="text-warning d-flex gap-1 fs-5">
                          {[...Array(5)].map((_, i) => (
                            <BsStarFill key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-center p-4 fs-5 text-muted">
                      <FaQuoteLeft className="text-danger me-2" />
                      {item.feedback}
                      <FaQuoteRight className="text-danger ms-2" />
                    </p>
                  </div>
                ))}
              </div>

              <div className="carousel-indicators">
                {feedback.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={idx}
                    className={idx === 0 ? "active" : ""}
                    aria-current={idx === 0 ? "true" : "false"}
                    aria-label={`Slide ${idx + 1}`}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#FF9292",
                      border: "none",
                      margin: "0 5px",
                    }}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
