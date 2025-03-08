import React from "react";
import feature1 from "../../assets/Images/features-light-1.jpg";
import feature2 from "../../assets/Images/features-light-2.jpg";
import feature3 from "../../assets/Images/features-light-3.jpg";

const Features = () => {
  return (
    <section className="container " id="features">
      <div className="text-center mb-4">
        <h2 className="font-sign">Features</h2>
        <p className="font-mono">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          magni.
        </p>
      </div>

      <div className="row gy-5 align-items-center">
        {/* First Feature Section */}
        <div className="col-12">
          <div className="row align-items-center gy-3">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <h3 className="fw-bold">Lorem ipsum dolor sit.</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                ut qui optio dignissimos vel ad. Unde porro sapiente cum
                explicabo dicta rerum, non aut quam!
              </p>
              <button className="btn btn-danger fw-bold">Get Started</button>
            </div>
            <div className="col-12 col-lg-6">
              <div className="position-relative">
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

        {/* Second Feature Section */}
        <div className="col-12">
          <div className="row align-items-center gy-3">
            <div className="col-12 col-lg-6">
              <img
                className="rounded-3 w-100"
                loading="lazy"
                src={feature3}
                alt="Feature 3"
              />
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <h3 className="fw-bold">Lorem ipsum dolor sit.</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                ut qui optio dignissimos vel ad. Unde porro sapiente cum
                explicabo dicta rerum, non aut quam!
              </p>
              <button className="btn btn-danger fw-bold">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
