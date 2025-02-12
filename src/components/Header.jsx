import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar.jsx";

const Header = () => {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  min-height: 3rem;
  border: 2px solid red;
`;

export default Header;
