import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Info>
        <div className="two-grid-container">
          <div className="info">
            <h2 className="title">about us</h2>
            <h3 className="secondary-title">Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              exercitationem non tenetur dicta cumque possimus.
            </p>
            <button>
              see more <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </button>
          </div>
          <div className="tiles two-grid-container">
            <div className="tile">
              <div className="icon">
                <i></i>
              </div>
              <h4>Lorem, ipsum.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum corporis excepturi blanditiis saepe cum enim adipisci
                est cumque, veniam natus.
              </p>
            </div>
            <div className="tile">
              <div className="icon">
                <i></i>
              </div>
              <h4>Lorem, ipsum.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum corporis excepturi blanditiis saepe cum enim adipisci
                est cumque, veniam natus.
              </p>
            </div>
            <div className="tile">
              <div className="icon">
                <i></i>
              </div>
              <h4>Lorem, ipsum.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum corporis excepturi blanditiis saepe cum enim adipisci
                est cumque, veniam natus.
              </p>
            </div>
            <div className="tile">
              <div className="icon">
                <i></i>
              </div>
              <h4>Lorem, ipsum.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum corporis excepturi blanditiis saepe cum enim adipisci
                est cumque, veniam natus.
              </p>
            </div>
          </div>
        </div>
      </Info>
      <Banner>
        <div className="container">
          <div className="box">
            <p>232</p>
            <span>Clients</span>
          </div>
          <div className="box">
            <p>521</p>
            <span>Projects</span>
          </div>
          <div className="box">
            <p>1453</p>
            <span>Hours of support</span>
          </div>
          <div className="box">
            <p>32</p>
            <span>Workers</span>
          </div>
        </div>
      </Banner>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 0.4fr;
  gap: 0px 0px;
  grid-template-areas:
    "Info"
    "Banner";
`;

const Info = styled.div``;
const Banner = styled.div``;
export default About;
