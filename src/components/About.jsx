import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import statsBanner from "../assets/Images/stats-bg.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faBuilding,
  faChartLine,
  faCogs,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <Wrapper id="about">
      <Info>
        <div className="info">
          <h2 className="heading">about us</h2>
          <h3 className="subtitle">lorem10Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, odio?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Velit exercitationem non tenetur dicta cumque possimus.
          </p>
          <button>
            See More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="tiles">
          <Tile>
            <div className="icon">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <h4>Business Growth</h4>
            <p>
              Helping businesses scale with strategic insights and expert
              guidance.
            </p>
          </Tile>
          <Tile>
            <div className="icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h4>Market Analysis</h4>
            <p>
              Providing data-driven market insights to drive informed
              decision-making.
            </p>
          </Tile>
          <Tile>
            <div className="icon">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <h4>Technical Expertise</h4>
            <p>
              Empowering businesses with modern technical solutions and
              innovations.
            </p>
          </Tile>
          <Tile>
            <div className="icon">
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <h4>Networking Solutions</h4>
            <p>
              Seamless networking infrastructure for high-performance
              connectivity.
            </p>
          </Tile>
        </div>
      </Info>

      <Banner>
        <div className="bgc">
          <div className="stats">
            <div className="box box1">
              <p>232</p>
              <span>Clients</span>
            </div>
            <div className="box box2">
              <p>521</p>
              <span>Projects</span>
            </div>
            <div className="box box3">
              <p>1453</p>
              <span>Hours of support</span>
            </div>
            <div className="box box4">
              <p>32</p>
              <span>Workers</span>
            </div>
          </div>
        </div>
      </Banner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.backgroundLight};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 0.4fr;
  height: auto;
  scroll-margin-top: 80px;
`;
const Info = styled.div`
  padding: 2rem;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 3rem;
  color: ${({ theme }) => theme.textDark};

  .info {
    display: flex;
    flex-direction: column;
    max-width: 40%;
    gap: 1rem;
    text-align: left;
    justify-content: center;
  }

  .subtitle {
    text-align: left;
    font-size: 1.5rem;
  }

  .tiles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .info {
      max-width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tiles {
      grid-template-columns: 1fr 1fr;
    }

    .subtitle {
      font-size: 1.2rem;
    }
  }
`;

const Tile = styled.div`
  max-height: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.textLight};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({ theme }) => theme.secondaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const Banner = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  .bgc {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${statsBanner});

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .stats {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    gap: 4rem;
    text-align: center;
    color: ${({ theme }) => theme.textLight};
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    width: 150px;

    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
  }

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .stats {
      gap: 2rem;
    }
    p {
      font-size: 2rem;
    }
    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .stats {
      flex-direction: column;
      gap: 1.5rem;
    }

    .box {
      width: 100%;
    }

    p {
      font-size: 1.8rem;
    }
    span {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .stats {
      gap: 1rem;
    }
    .box {
      width: 100%;
    }
    p {
      font-size: 1.5rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

export default About;
