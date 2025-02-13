import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper scrolling={scrolling}>
      <div className="logo-con">
        <h1 className="logo">Logo</h1>
      </div>

      <NavList menuOpen={menuOpen} scrolling={scrolling}>
        <div className="menu-header">
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={() => setMenuOpen(false)}
          />
        </div>
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
            <a
              className="nav-items-link"
              href={item.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </NavList>

      <div className="btn">
        <button>Get Started</button>

        <FontAwesomeIcon
          className="menu-icon"
          icon={menuOpen ? faTimes : faBars}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ scrolling }) => (scrolling ? "#333" : "transparent")};
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;

  .logo {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 2.5rem;
  }

  .menu-icon {
    font-size: 2rem;
    color: ${({ scrolling }) => (scrolling ? "black" : "white")};
    cursor: pointer;
    display: none;
  }

  @media (max-width: 786px) {
    .menu-icon {
      display: block;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  .menu-header {
    display: none;
  }

  .nav-items a {
    font-size: 1.5rem;
    color: ${({ scrolling, theme }) =>
      scrolling ? theme.primaryColor : theme.textLight};
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.primaryColor};
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 786px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 999;
    transition: opacity 0.3s ease-in-out;

    .nav-items a {
      font-size: 1.8rem;
      color: white;
    }

    .menu-header {
      display: block;
      position: absolute;
      top: 20px;
      right: 30px;
    }

    .close-icon {
      font-size: 2rem;
      color: white;
      cursor: pointer;
    }
  }
`;

export default Navigation;
