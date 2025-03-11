import React, { useEffect, useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top w-100 p-3 ${
        scrolled ? "navbar-bg-scrolled" : "navbar-bg"
      }`}
    >
      <div className="container-fluid">
        <a href="#" className="navbar-brand ms-xl-5 font-sign">
          Logo
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="navbarNav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse vh-100 d-flex justify-content-center align-items-center ${
            menuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav justify-content-start align-items-center h-100 gap-2">
            {[
              "Home",
              "About",
              "Services",
              "Features",
              "Portfolio",
              "Pricing",
              "Team",
              "Testimonials",
              "Blog",
              "Contact",
            ].map((name) => (
              <li className="nav-item" key={name}>
                <a
                  href={`#${name.toLowerCase()}`}
                  className={`nav-link fw-bold ${
                    scrolled ? "text-light" : "text-dark"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
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
