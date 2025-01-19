import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axiosService from "../../hooks/axiosService";

export default function Header() {
  const [isOPen, setIsOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axiosService.get("/api/slider-cities");
        const citiesData = response.data?.data?.cities;

        if (Array.isArray(citiesData)) {
          setCities(citiesData);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <header>
      <div className="top_bar">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : cities?.length > 0 ? (
          <ul>
            {cities.map((city, index) => (
              <li key={index}>{city.title}</li>
            ))}
          </ul>
        ) : (
          <p>No cities available</p>
        )}
      </div>

      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>

          <div className={`nav_links ${isOPen ? "open" : ""}`}>
            <NavLink
              to="/"
              className="nav_link logo"
              onClick={() => setIsOpen(false)}
            >
              <img src="/images/logo.svg" alt="Logo" />
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
              Login <i className="fa-solid fa-arrow-right-to-bracket" />
            </Link>
          </div>

          <div className="other_actions">
            <Link
              target="_blank"
              to="https://platinumbrothers.traffit.com/login"
              className="customBtn"
            >
              Login <i className="fa-solid fa-arrow-right-to-bracket" />
            </Link>

            <button className="toggler" onClick={() => setIsOpen(!isOPen)}>
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
