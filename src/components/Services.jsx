import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faBriefcase,
  faCalendarAlt,
  faChartBar,
  faClipboardList,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <Wrapper id="services">
      <h1 className="title">Services</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, harum!
      </p>

      <List>
        <Box>
          <div className="icon-box">
            <FontAwesomeIcon className="icon" icon={faBriefcase} />
          </div>
          <div className="content">
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              optio molestias vel fugiat eveniet, omnis fugit earum nobis quam
              aut.
            </p>
          </div>
        </Box>
        <Box>
          <div className="icon-box">
            <FontAwesomeIcon className="icon" icon={faClipboardList} />
          </div>
          <div className="content">
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              optio molestias vel fugiat eveniet, omnis fugit earum nobis quam
              aut.
            </p>
          </div>
        </Box>
        <Box>
          <div className="icon-box">
            <FontAwesomeIcon className="icon" icon={faChartBar} />
          </div>
          <div className="content">
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              optio molestias vel fugiat eveniet, omnis fugit earum nobis quam
              aut.
            </p>
          </div>
        </Box>
        <Box>
          <div className="icon-box">
            <FontAwesomeIcon className="icon" icon={faBinoculars} />
          </div>
          <div className="content">
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              optio molestias vel fugiat eveniet, omnis fugit earum nobis quam
              aut.
            </p>
          </div>
        </Box>
        <Box>
          <div className="icon-box">
            <FontAwesomeIcon className="icon" icon={faSun} />
          </div>
          <div className="content">
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              optio molestias vel fugiat eveniet, omnis fugit earum nobis quam
              aut.
            </p>
          </div>
        </Box>
        <Box>
          <div className="icon-box">
            <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
          </div>
          <div className="content">
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              optio molestias vel fugiat eveniet, omnis fugit earum nobis quam
              aut.
            </p>
          </div>
        </Box>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: auto;
  padding: 4rem 2rem;

  .subtitle {
    text-align: center;
  }
`;

const List = styled.div`
  padding: 1rem 10rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    "a b"
    "c d"
    "e f";

  .box1,
  .box2 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 1rem 1.5rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -5px;
    width: 5%;
    height: 2px;
    background-color: ${({ theme }) => theme.primaryColor};
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 7%;
    width: 93%;
    height: 2px;
    background-color: ${({ theme }) => theme.backgroundDark};
  }

  &:nth-child(1) {
    grid-area: a;
  }
  &:nth-child(2) {
    grid-area: b;
  }
  &:nth-child(3) {
    grid-area: c;
  }
  &:nth-child(4) {
    grid-area: d;
  }
  &:nth-child(5) {
    grid-area: e;
  }
  &:nth-child(6) {
    grid-area: f;
  }

  .icon-box {
    position: relative;
    &::before {
      content: "";
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.secondaryColor};
      opacity: 65%;
      position: absolute;
      bottom: -6px;
      right: -15px;
      z-index: 2;
    }
  }
  .icon {
    width: 50px;
    height: 50px;
    position: relative;
    z-index: 1;
  }
  .content {
    text-align: left;
  }
  .content h4 {
    margin: 0;
  }

  .content p {
    margin: 0;
    text-align: justify;
    font-size: 14px;
  }
`;

export default Services;
