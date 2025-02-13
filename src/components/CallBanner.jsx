import React from "react";
import test1 from "../assets/testimonials/testimonials-1.jpg";
import test2 from "../assets/testimonials/testimonials-2.jpg";
import test3 from "../assets/testimonials/testimonials-3.jpg";
import test4 from "../assets/testimonials/testimonials-4.jpg";
import test5 from "../assets/testimonials/testimonials-5.jpg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CallBanner = () => {
  const testimonials = [
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Wrapper>
      <div className="CTA">
        <h2>call to action</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          distinctio dolor tempora dicta reprehenderit voluptas fugit vitae
          recusandae illum alias suscipit qui praesentium, dolorem autem atque
          aliquam obcaecati temporibus, nesciunt harum earum soluta? Aperiam,
          expedita? Quam, fuga cupiditate. Odit, neque!
        </p>
        <button>call to action</button>
      </div>
      <Testimonials>
        <div className="intro">
          <h2>testimonials</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae illum vero vel ratione repellendus ex excepturi
            reprehenderit facere obcaecati exercitationem blanditiis fuga
            accusamus voluptate similique alias ullam quas, perferendis harum!
            Numquam delectus architecto aliquid ex itaque quam reprehenderit
            nesciunt facilis?
          </p>
        </div>

        <Carousel>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="top-section">
                  <div className="image">
                    <img src={testimonial.img} alt={testimonial.name} />
                  </div>
                  <div className="about">
                    <h2 className="name">{testimonial.name}</h2>
                    <h4 className="role">{testimonial.role}</h4>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          color="#FFD700"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="feedback">
                  <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                  <span className="desc">{testimonial.feedback}</span>
                  <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                </div>
              </div>
            ))}
          </Slider>
        </Carousel>
      </Testimonials>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  .CTA {
    width: 100%;
    background-color: ${({ theme }) => theme.textDark};
    color: ${({ theme }) => theme.textLight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 5rem;
    gap: 1.5rem;
  }

  h2 {
    text-transform: capitalize;
    margin: 0;
  }

  p {
    margin: 0;
    text-align: center;
    width: 80%;
  }

  button {
    padding: 10px 20px;
    background: #e84545;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    .CTA {
      padding: 2rem 4rem;
    }
  }

  @media (max-width: 768px) {
    .CTA {
      padding: 2rem;
    }
  }
`;

const Testimonials = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 2rem 10rem;

  .intro {
    max-width: 50%;
    h2 {
      text-align: left;
      font-size: 2.5rem;
    }
    p {
      font-size: 0.8rem;
      text-align: justify;
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
    .intro {
      max-width: 60%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    .intro {
      max-width: 100%;
    }
  }
`;

const Carousel = styled.div`
  width: 50%;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1.5rem;

  .testimonial-card {
    background: ${({ theme }) => theme.textLight};
    color: ${({ theme }) => theme.textDark};
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: inline-block;
  }

  .top-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    text-align: left;
  }

  .image {
    flex-shrink: 0;
    width: 150px;
  }

  .image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .about {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
  }

  .stars {
    margin-top: 5px;
    display: flex;
    gap: 0.5rem;
  }

  .name {
    font-size: 2rem;
  }
  .role {
    font-size: 0.9rem;
  }

  .feedback {
    margin-top: 15px;
    font-style: italic;
    color: #666;
    text-align: center;
    width: 100%;
  }

  .quote-icon {
    color: ${({ theme }) => theme.primaryColor};
    margin: 0 5px;
    font-size: 2rem;
  }

  .desc {
    text-align: justify;
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export default CallBanner;
