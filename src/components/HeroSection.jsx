import React from "react";
import styled from "styled-components";
import heroBg from "../assets/Images/hero-bg.jpg";
// client images
import client1 from "../assets/clients/client-1.png";
import client2 from "../assets/clients/client-2.png";
import client3 from "../assets/clients/client-3.png";
import client4 from "../assets/clients/client-4.png";
import client5 from "../assets/clients/client-5.png";

const HeroSection = () => {
  return (
    <Wrapper id="home">
      <Subscribe>
        <div className="con">
          <h3 className="heading">Welcome to our website</h3>
          <p className="sub-title">
            We are a team of talented designers making websites.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </Subscribe>
      <Banner>
        {[client1, client2, client3, client4, client5].map((client, index) => (
          <div key={index} className="banner-images">
            <img src={client} alt="clients" />
          </div>
        ))}
      </Banner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 0.4fr;
  gap: 0px 0px;
  grid-template-areas:
    "Subscribe"
    "Banner";
  text-align: center;

  @media (max-width: 768px) {
    background-position: top;
    padding: 0;
  }
`;

const Subscribe = styled.div`
  grid-area: Subscribe;
  display: flex;
  position: relative;
  .con {
    position: absolute;
    top: 50%;
    left: 33%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    padding: 0 1rem;
  }

  .heading {
    color: ${({ theme }) => theme.textLight};
  }
  .sub-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #fff;
    text-align: left;
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
    width: 100%;
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

const Banner = styled.div`
  grid-area: Banner;
  background-color: ${({ theme }) => theme.backgroundLight};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;

  .banner-images {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  img {
    object-fit: cover;
    width: 100px;
    height: auto;
    cursor: pointer;
    filter: grayscale(100%);
    transition: all 0.3s ease;

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    .banner-images {
      justify-content: space-evenly;
      gap: 1rem;
    }

    img {
      width: 80px;
    }
  }

  @media (max-width: 480px) {
    .banner-images {
      justify-content: center;
    }

    img {
      width: 70px;
    }
  }
`;

export default HeroSection;
