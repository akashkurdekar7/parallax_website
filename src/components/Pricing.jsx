import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faCube,
  faRocket,
  faPlaneDeparture,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  const [show, setShow] = useState(null);

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

  const toggleFaq = (index) => {
    setShow(show === index ? null : index);
  };

  return (
    <Wrapper id="pricing">
      <div className="head">
        <h2 className="title">Pricing</h2>
        <h3 className="subtitle">Lorem ipsum dolor sit amet.</h3>
      </div>
      <Prices>
        <div className="box">
          <div className="info">
            <h3>Base Plan</h3>
            <div className="icon-box">
              <FontAwesomeIcon className="icon" icon={faCube} />
            </div>
            <div className="price">
              <span className="dollar">$</span>
              <span className="number">0</span>
              <span className="month">/month</span>
            </div>
          </div>

          <ul className="obj">
            {[
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faTimes,
                desc: "Lorem ipsum dolor sit.",
                color: "red",
                strike: true,
              },
              {
                icon: faTimes,
                desc: "Lorem ipsum dolor sit.",
                color: "red",
                strike: true,
              },
            ].map((item, idx) => (
              <li key={idx} className="obj-items">
                <FontAwesomeIcon
                  className={`obj-icon ${
                    item.icon === faCheck ? "check" : "times"
                  }`}
                  icon={item.icon}
                  style={{ color: item.color }}
                />
                <p
                  style={{
                    color: item.strike ? "#aaa" : "inherit",
                    textDecoration: item.strike ? "line-through" : "none",
                  }}
                >
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          <button>buy now</button>
        </div>

        <div className="box">
          <div className="info">
            <h3>Business Plan</h3>
            <div className="icon-box">
              <FontAwesomeIcon className="icon" icon={faRocket} />
            </div>
            <div className="price">
              <span className="dollar">$</span>
              <span className="number">29</span>
              <span className="month">/month</span>
            </div>
          </div>

          <ul className="obj">
            {[
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
            ].map((item, idx) => (
              <li key={idx} className="obj-items">
                <FontAwesomeIcon
                  className={`obj-icon ${
                    item.icon === faCheck ? "check" : "times"
                  }`}
                  icon={item.icon}
                  style={{ color: item.color }}
                />
                <p
                  style={{
                    color: item.strike ? "#aaa" : "inherit",
                    textDecoration: item.strike ? "line-through" : "none",
                  }}
                >
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
          <button>buy now</button>
        </div>

        <div className="box">
          <div className="info">
            <h3>Developer Plan</h3>
            <div className="icon-box">
              <FontAwesomeIcon className="icon" icon={faPlaneDeparture} />
            </div>
            <div className="price">
              <span className="dollar">$</span>
              <span className="number">49</span>
              <span className="month">/month</span>
            </div>
          </div>

          <ul className="obj">
            {[
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
              {
                icon: faCheck,
                desc: "Lorem ipsum dolor sit.",
                color: "green",
                strike: false,
              },
            ].map((item, idx) => (
              <li key={idx} className="obj-items">
                <FontAwesomeIcon
                  className={`obj-icon ${
                    item.icon === faCheck ? "check" : "times"
                  }`}
                  icon={item.icon}
                  style={{ color: item.color }}
                />
                <p
                  style={{
                    color: item.strike ? "#aaa" : "inherit",
                    textDecoration: item.strike ? "line-through" : "none",
                  }}
                >
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
          <button>buy now</button>
        </div>
      </Prices>

      <FAQ>
        <div className="content">
          <h3>Frequently asked</h3>
          <h2>Questions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            quo natus, commodi totam, soluta alias adipisci similique
            exercitationem aspernatur dolorem deserunt consequuntur quas, quae
            tenetur delectus tempora cum molestiae nulla!
          </p>
        </div>

        <div className="questions">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${show === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="question-header">
                <div className="question-con">
                  <h4 className="indexing">{index + 1}.</h4>
                  <h4 className="question">{faq.question}</h4>
                </div>
                <FontAwesomeIcon
                  icon={show === index ? faAngleUp : faAngleDown}
                  className="icon"
                />
              </div>
              <div className="answer-container">
                <p className="answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </FAQ>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: auto;
  padding: 4rem 2rem;
`;

const Prices = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  .box {
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.textDark};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, border-color 0.3s ease,
      box-shadow 0.3s ease;
    width: 100%;
    max-width: 350px;
    margin-bottom: 2rem;

    &:nth-child(2) {
      transform: scale(1.1);
      border-color: ${({ theme }) => theme.primaryColor};
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      width: 100%;
      h3 {
        text-align: center;
        font-size: 1.2rem;
      }

      .icon-box {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.primaryColor || "#E84545"};
        position: relative;
        z-index: 3;

        &:after {
          content: "";
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.primaryColor || "#E84545"};
          opacity: 15%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        &::before {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          background-color: ${({ theme }) => theme.primaryColor || "#E84545"};
          opacity: 0.5;
          border-radius: 50%;
          opacity: 10%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        .icon {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.textLight};
          z-index: 4;
        }
      }

      .price {
        position: relative;
        .dollar {
          position: absolute;
          top: 15%;
          left: -18%;
          font-size: 2rem;
          color: ${({ theme }) => theme.primaryColor};
        }
        .number {
          color: ${({ theme }) => theme.primaryColor};
          font-size: 3rem;
          font-weight: 700;
        }
        .month {
          font-size: 1.5rem;
        }
      }
    }

    .obj {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0rem 2rem;
      margin: 0;
      .obj-items {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
      .obj-icon {
        &.check {
          color: green;
        }
        &.times {
          color: red;
        }
      }
      p {
        font-size: 1.2rem;
        margin: 0;
      }
    }

    button {
      border-radius: 24px;
      height: 48px;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    .box {
      max-width: 45%;
    }
  }

  @media (max-width: 768px) {
    .box {
      max-width: 80%;
      padding: 15px;
    }

    .obj {
      padding: 0rem 1rem;
    }
  }
`;

const FAQ = styled.div`
  width: 100%;
  margin: auto;
  padding: 4rem 2rem;
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;

  @media (max-width: 786px) {
    flex-direction: column;
  }
  .content {
    text-align: center;
    max-width: 400px;
    h3 {
      font-size: 2rem;
      font-weight: bold;
      text-align: left;
    }
    h2 {
      text-align: left;
      font-size: 3rem;
      color: ${({ theme }) => theme.primaryColor};
    }
    p {
      font-size: 1rem;
      color: #ccc;
      text-align: justify;
    }
  }

  .questions {
    min-width: 50%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
  .question-con {
    display: flex;
    gap: 1rem;
  }
  .indexing {
    color: ${({ theme }) => theme.primaryColor};
    margin: 0;
  }
  .question {
    margin: 0;
    transition: color 0.3s ease;
  }
  .faq-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .answer {
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .answer-container {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease, padding 0.3s ease;
    }

    &.open .answer-container {
      max-height: 100px;
      padding-top: 0.5rem;
    }
    &.open .question {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

export default Pricing;
