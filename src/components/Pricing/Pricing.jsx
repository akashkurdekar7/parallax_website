import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDeveloperMode, MdOutlineDone } from "react-icons/md";
import { PiCubeDuotone } from "react-icons/pi";

const Pricing = () => {
  const plans = [
    {
      name: "Base Plan",
      icon: <PiCubeDuotone />,
      price: 0,
      features: [
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: false },
        { desc: "Lorem ipsum dolor sit.", included: false },
      ],
    },
    {
      name: "Business Plan",
      icon: <FaBusinessTime />,
      price: 29,
      features: [
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
      ],
    },
    {
      name: "Developer Plan",
      icon: <MdDeveloperMode />,
      price: 49,
      features: [
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
        { desc: "Lorem ipsum dolor sit.", included: true },
      ],
    },
  ];

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Curabitur blandit tempus porttitor?",
      answer: "Vestibulum id ligula porta felis euismod semper.",
    },
    {
      question: "Aenean lacinia bibendum nulla?",
      answer: "Nulla vitae elit libero, a pharetra augue.",
    },
    {
      question: "Vestibulum id ligula porta?",
      answer:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      question: "Fusce dapibus tellus ac cursus?",
      answer: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    },
    {
      question: "Donec ullamcorper nulla non metus?",
      answer: "Maecenas faucibus mollis interdum.",
    },
  ];

  return (
    <section className="container" id="pricing">
      <div className="text-center mb-4">
        <h1 className="font-sign">Pricing</h1>
        <p className="font-mono">
          Discover the latest insights from industry experts.
        </p>
      </div>

      <div className="row g-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="border border-2 rounded-3 p-4 text-center d-flex flex-column h-100">
              <h3 className="fw-bold">{plan.name}</h3>

              <div className="mb-2">
                {React.cloneElement(plan.icon, {
                  className: "text-danger fs-1",
                })}
              </div>

              <h2>
                <span className="fw-bold">${plan.price}</span>
                <span className="text-muted">/month</span>
              </h2>

              <ul className="list-unstyled text-start w-75 d-flex flex-column align-items-center gap-4 my-3 w-100">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="d-flex align-items-center gap-2"
                    style={{
                      color: feature.included ? "inherit" : "#aaa",
                      textDecoration: feature.included
                        ? "none"
                        : "line-through",
                    }}
                  >
                    {feature.included ? (
                      <MdOutlineDone className="text-success" />
                    ) : (
                      <ImCross className="text-danger" />
                    )}
                    <span>{feature.desc}</span>
                  </li>
                ))}
              </ul>

              <button className="btn btn-danger fw-bold mt-auto">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center flex-column gap-2">
            <h3 className="fw-semibold">
              Frequently Asked <span className="fw-bolder">Questions</span>
            </h3>
            <p className="text-muted">
              Have questions? Here are some common questions and answers to help
              you out!
            </p>
          </div>

          <div className="col-12 col-lg-6">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, idx) => {
                const collapseId = `collapse-${idx}`;
                return (
                  <div className="accordion-item mb-2" key={idx}>
                    <h2 className="accordion-header" id={`heading-${idx}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                      id={collapseId}
                      aria-labelledby={`heading-${idx}`}
                    >
                      <div className="accordion-body">
                        <span className="text-danger">Answer: </span>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
