import React from "react";
import test1 from "../../assets/testimonials/testimonials-1.jpg";
import test2 from "../../assets/testimonials/testimonials-2.jpg";
import test3 from "../../assets/testimonials/testimonials-3.jpg";
import test4 from "../../assets/testimonials/testimonials-4.jpg";
import test5 from "../../assets/testimonials/testimonials-5.jpg";
import { BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

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
    <>
      {/* CTA Section */}
      <div className="container-fluid text-center text-bg-dark p-5 d-flex flex-column gap-3 align-items-center">
        <h2 className="font-sign">Call to Action</h2>
        <p className="font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          distinctio dolor tempora dicta reprehenderit voluptas fugit vitae
          recusandae illum alias suscipit qui praesentium, dolorem autem atque
          aliquam obcaecati temporibus, nesciunt harum earum soluta? Aperiam,
          expedita? Quam, fuga cupiditate. Odit, neque!
        </p>
        <button className="btn btn-warning">Call to Action</button>
      </div>

      <section className="container" id="testimonials">
        <div className="row">
          <div className="col-12 col-lg-6 text-center text-md-start mb-4 d-flex flex-column justify-content-center">
            <h2 className="font-sign">Testimonials</h2>
            <p className="font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae illum vero vel ratione repellendus ex excepturi
              reprehenderit facere obcaecati exercitationem blanditiis fuga
              accusamus voluptate similique alias ullam quas, perferendis harum!
            </p>
          </div>

          <div className="col-12 col-lg-6">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
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
                  ></button>
                ))}
              </div>

              <div className="carousel-inner">
                {feedback.map((item, idx) => (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  >
                    <img
                      className="d-block w-100"
                      loading="lazy"
                      src={item.img}
                      alt={item.name}
                    />
                    <div
                      className="carousel-caption w-100 p-3"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        bottom: "0%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "10px",
                        width: "80%",
                      }}
                    >
                      <h2 className="fs-1 fw-bold text-light">{item.name}</h2>
                      <h4 className="fs-4 text-warning">{item.role}</h4>
                      <p className="fs-5 text-light">{item.feedback}</p>
                      <div className="text-warning d-flex gap-2 mb-5 justify-content-center fs-5">
                        {[...Array(5)].map((_, i) => (
                          <BsStarFill key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
