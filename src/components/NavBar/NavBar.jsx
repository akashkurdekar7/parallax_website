import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [scrolled, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      // setScrolled(window.scrollY > 50);
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
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
          <a href="#" className="navbar-brand fs-2 font-sign">
            Logo
          </a>
        </div>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-expanded={menuOpen}
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse collapse text-center justify-content-center ${
            menuOpen ? "show" : ""
          }`}
          id="navbar"
        >
          <div className="d-flex align-items-center justify-content-center">
            <ul className="navbar-nav gap-md-4 gap-3 align-items-center ">
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
                <li className="nav-item text-white " key={item.name}>
                  <a
                    href={item.link}
                    className={`nav-link fw-bold ${
                      scrolled ? "text-light" : "text-dark"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <div className="btn btn-danger text-capitalize mx-auto my-3">
                get started
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
