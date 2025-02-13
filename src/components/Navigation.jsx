import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = ({ scrolling }) => {
  return (
    <Wrapper>
      <div className="logo-con">
        <h1 className="logo">Logo</h1>
      </div>

      <NavMenu scrolling={scrolling}>
        <ul className="nav-items-list">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Portfolio", link: "#portfolio" },
            { name: "Pricing", link: "#pricing" },
            { name: "Team", link: "#team" },
            { name: "Blog", link: "#blog" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <li key={item.name} className="nav-items">
              <a className="nav-items-link" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </NavMenu>

      <div className="btn">
        <button>Get started</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    margin-left: 1rem;
    color: ${({ theme }) => theme.primaryColor};
  }
  .btn button {
    margin-left: 1rem;
  }
`;

const NavMenu = styled.nav`
  display: flex;

  .nav-items-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 10px 20px;
    border-radius: 8px;
    transition: background-color 0.3s ease-in-out;
    color: ${({ scrolling }) => (scrolling ? "red" : "white")};
  }

  .nav-items {
    color: ${({ scrolling }) => (scrolling ? "red" : "white")};
    transition: color 0.3s ease-in-out;
  }
  .nav-items-link {
    color: ${({ scrolling }) => (scrolling ? "red" : "white")};
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

export default Navigation;
