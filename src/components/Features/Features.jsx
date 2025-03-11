import React from "react";
import feature1 from "../../assets/Images/features-light-1.jpg";
import feature2 from "../../assets/Images/features-light-2.jpg";
import feature3 from "../../assets/Images/features-light-3.jpg";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="font-sign">Features</h1>
            <p className="font-mono">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, magni.
            </p>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="text-center text-lg-start p-4 ">
                    <h3 className="fw-bold">Lorem ipsum dolor sit.</h3>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid ut qui optio dignissimos vel ad. Unde porro
                      sapiente cum explicabo dicta rerum, non aut quam!
                    </p>
                    <button className="btn btn-danger fw-bold">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="text-center text-lg-start p-4 ">
                    <img
                      className="rounded-3 w-100 mb-2"
                      loading="lazy"
                      src={feature1}
                      alt="Feature 1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row align-items-center gy-3">
                <div className="col-12 col-lg-6">
                  <div className="text-center text-lg-start p-4 ">
                    <img
                      className="rounded-3 w-100"
                      loading="lazy"
                      src={feature3}
                      alt="Feature 3"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 text-center text-lg-start">
                  <h3 className="fw-bold">Lorem ipsum dolor sit.</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid ut qui optio dignissimos vel ad. Unde porro sapiente
                    cum explicabo dicta rerum, non aut quam!
                  </p>
                  <button className="btn btn-danger fw-bold" href="#contact">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
