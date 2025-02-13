import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation.jsx";

const Header = () => {
  return (
    <Wrapper>
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background: transparent;
`;

export default Header;
