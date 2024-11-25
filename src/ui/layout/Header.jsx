import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOPen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  return (
    <header>
      <div className="top_bar">
        <ul>
          <li>MANILA</li>
          <li>CEBU</li>
          <li>DAVAO</li>
        </ul>
      </div>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <img src="/images/logo.svg" alt="" />
          </Link>

          <div className={`nav_links ${isOPen ? "open" : ""}`}>
            <NavLink
              to="/"
              className="nav_link logo"
              onClick={() => setIsOpen(false)}
            >
              <img src="/images/logo.svg" alt="" />
            </NavLink>
            <NavLink
              to="/"
              className="nav_link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/employers"
              className="nav_link"
              onClick={() => setIsOpen(false)}
            >
              Employers
            </NavLink>
            <NavLink
              to="/jobseekers"
              className="nav_link"
              onClick={() => setIsOpen(false)}
            >
              Jobseekers
            </NavLink>
            <NavLink
              to="/contact"
              className="nav_link"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
            <Link
              target="_blank"
              to="https://platinumbrothers.traffit.com/login"
              className="nav_link login"
              onClick={() => setIsOpen(false)}
            >
              Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          </div>

          <div className="other_actions">
            <Link
              target="_blank"
              to="https://platinumbrothers.traffit.com/login"
              className="customBtn"
            >
              Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>

            <button className="toggler" onClick={() => setIsOpen(!isOPen)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}