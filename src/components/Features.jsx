import React from "react";
import styled from "styled-components";
import feature1 from "../assets/Images/features-light-1.jpg";
import feature2 from "../assets/Images/features-light-2.jpg";
import feature3 from "../assets/Images/features-light-3.jpg";

const Features = () => {
  return (
    <Wrapper id="features">
      <h1 className="title">Features</h1>
      <h3 className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, esse.
      </h3>

      <Feature>
        <div className="box">
          <div className="content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ut qui optio dignissimos vel ad. Unde porro sapiente cum explicabo
              dicta rerum, non aut quam!
            </p>
            <button>Get Started</button>
          </div>
          <div className="image">
            <img src={feature1} className="first" alt="Feature 1" />
            <img src={feature2} className="second" alt="Feature 2" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={feature3} alt="Feature 3" />
          </div>
          <div className="content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ut qui optio dignissimos vel ad. Unde porro sapiente cum explicabo
              dicta rerum, non aut quam!
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </Feature>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  height: auto;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 2rem 1rem;

  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .image {
    display: flex;
    gap: 1rem;
    position: relative;

    .first {
      top: 15%;
      position: absolute;
      right: 20%;
      z-index: 2;
    }

    img {
      width: 100%;
      max-width: 500px;
      height: auto;
      object-fit: cover;
      border: 5px solid ${({ theme }) => theme.textLight};
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  }

  .content {
    flex: 1;
    text-align: left;
    max-width: 500px;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      color: #555;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    button {
      background-color: var(--primary-color);
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--secondary-color);
      }
    }
  }

  @media (max-width: 768px) {
    .box {
      flex-direction: column;
      text-align: center;

      .content {
        text-align: center;
      }

      .image {
        justify-content: center;
      }
    }
  }
`;

export default Features;
