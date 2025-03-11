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
        <div className="container z-2 ">
          <div className="d-flex flex-column align-items-md-start ps-md-5 ms-md-5 align-items-center justify-content-center max-w-max">
            <h1 className="text-light">Welcome to our website</h1>
            <p className="info text-light text-md-left text-center">
              We are a team of talented designers making websites.
            </p>
            <form className="d-flex gap-2 justify-content-center align-items-center bg-light p-2 rounded">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          {[client1, client2, client3, client4, client5].map(
            (client, index) => (
              <div key={index} className="col">
                <div className="p-md-4 pt-3 text-center">
                  <img
                    loading="lazy"
                    className="img-fluid w-100"
                    style={{ filter: "grayscale(1)" }}
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
