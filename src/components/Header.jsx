import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navigation from "./Navigation.jsx";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      scrolling={scrolling}
    >
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled(motion.header)`
  width: 100%;
  min-height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background: ${({ scrolling }) => (scrolling ? "white" : "transparent")};
  box-shadow: ${({ scrolling }) =>
    scrolling ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none"};
`;

export default Header;
