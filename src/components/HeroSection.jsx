import React from "react";
import styled from "styled-components";
import heroBg from "../assets/Images/hero-bg.jpg";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="greet">
        <h3 className="title">Welcome to our website</h3>
        <p className="sub-title">
          We are a team of talented designers making websites.
        </p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  .greet {
    background: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    border-radius: 10px;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .sub-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .subscribe {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 250px;
    font-size: 1rem;
  }

  button {
    background-color: #e84545;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;

    &:hover {
      background-color: #ff9292;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.5rem;
    }

    .sub-title {
      font-size: 1rem;
    }

    .subscribe {
      flex-direction: column;
    }

    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export default HeroSection;
