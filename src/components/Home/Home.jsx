import React from "react";
import "../Home/Home.css";

// client images
import client1 from "../../assets/clients/client-1.png";
import client2 from "../../assets/clients/client-2.png";
import client3 from "../../assets/clients/client-3.png";
import client4 from "../../assets/clients/client-4.png";
import client5 from "../../assets/clients/client-5.png";

const Home = () => {
  return (
    <>
      <section
        className="container-fluid border border-2 home position-relative"
        id="home"
      >
        <div className="container text-center z-2">
          <div className="row justify-content-center">
            <div className="col-12">
              <h4 className="text-light">Welcome to our website</h4>
            </div>
            <div className="col-12">
              <p className="info text-light">
                We are a team of talented designers making websites.
              </p>
            </div>
            <div className="col-12">
              <form className="row g-2 justify-content-center">
                <div className="col-auto">
                  <label htmlFor="email" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="position-absolute bottom-0 w-100 z-2">
          <div className="container-fluid h-100">
            <div className="row justify-content-center">
              {[
                "Amazon",
                "Netflix",
                "Google",
                "Facebook",
                "Apple",
                "Microsoft",
              ].map((item, index) => (
                <div className="col text-center" key={index}>
                  <h5 className="text-bg-dark p-3 rounded text-uppercase">
                    {item}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      <div className="container-fluid">
        <div className="row p-3 gap-2">
          {[client1, client2, client3, client4, client5].map(
            (client, index) => (
              <div key={index} className="col">
                <img
                  loading="lazy"
                  className="img-fluid w-75"
                  src={client}
                  alt="clients"
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
