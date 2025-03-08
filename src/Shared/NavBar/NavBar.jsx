import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [scrolled, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`navbar navbar-expand-lg text-center w-100 p-3 fixed-top ${
        scrolled ? "navbar-bg-scrolled " : "navbar-bg"
      }`}
    >
      <div className="container-fluid">
        <div className="logo">
          <a href="#" className="navbar-brand text-uppercase fw-bolder">
            Logo
          </a>
        </div>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse collapse text-center justify-content-center`}
          id="navbar"
        >
          <ul className="navbar-nav gap-4 ">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Services", link: "#services" },
              { name: "Features", link: "#features" },
              { name: "Portfolio", link: "#portfolio" },
              { name: "Pricing", link: "#pricing" },
              { name: "Team", link: "#team" },
              { name: "Testimonials", link: "#testimonials" },
              { name: "Blog", link: "#blog" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <li className="nav-item text-white" key={item.name}>
                <a
                  href={item.link}
                  className={`nav-link fw-bold ${
                    scrolled ? "text-light" : "text-dark"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
