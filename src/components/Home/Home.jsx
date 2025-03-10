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
    <section className="home position-relative p-0" id="home">
      <div className="container-fluid home_cont vh-100">
        <div className="container text-center z-2">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="text-light">Welcome to our website</h1>
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
      </div>

      <div className="container ">
        <div className="row">
          {[client1, client2, client3, client4, client5].map(
            (client, index) => (
              <div key={index} className="col">
                <div className="p-4 text-center">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    style={{ filter: "grayscale(1)", width: "100px" }}
                    src={client}
                    alt="clients"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
