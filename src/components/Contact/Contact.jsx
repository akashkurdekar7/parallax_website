import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FcCallback } from "react-icons/fc";
import { PiEnvelopeSimpleOpen } from "react-icons/pi";

const Contact = () => {
  return (
    <section className="container" id="contact">
      <div className="text-center mb-4">
        <h3 className="fs-2 fw-bold">Contact</h3>
        <p className="fs-5 text-muted">
          Reach out to us for any inquiries or support.
        </p>
      </div>
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-12 col-lg-6">
            <div className="row gy-4">
              <div className="col-6">
                <div className="border border-2 p-3 rounded bg-light text-center">
                  <div className="fs-1 text-danger">
                    <BiLocationPlus />
                  </div>
                  <h4 className="mt-2">Address</h4>
                  <p className="mb-1">A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>
              <div className="col-6">
                <div className="border border-2 p-3 rounded bg-light text-center">
                  <div className="fs-1 text-success">
                    <FcCallback />
                  </div>
                  <h4 className="mt-2">Call Us</h4>
                  <p className="mb-1">+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div>
              <div className="col-6">
                <div className="border border-2 p-3 rounded bg-light text-center">
                  <div className="fs-1 text-primary">
                    <PiEnvelopeSimpleOpen />
                  </div>
                  <h4 className="mt-2">Email Us</h4>
                  <p className="mb-1">info@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="col-6">
                <div className="border border-2 p-3 rounded bg-light text-center">
                  <div className="fs-1 text-warning">
                    <BsClock />
                  </div>
                  <h4 className="mt-2">Open Hours</h4>
                  <p className="mb-1">Monday - Friday</p>
                  <p>9:00 AM - 05:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <form
              action="/submit"
              method="POST"
              className="p-4 border rounded bg-white shadow h-100"
            >
              <div className="mb-3">
                <input
                  className="form-control p-2"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control p-2"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control p-2"
                  rows={5}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button className="btn btn-success w-100 fw-bold" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
