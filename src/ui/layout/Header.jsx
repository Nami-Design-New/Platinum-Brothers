import { Link, NavLink } from "react-router-dom";

export default function Header() {
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

          <div className="nav_links">
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
            <NavLink to="/employers" className="nav_link">
              Employers
            </NavLink>
            <NavLink to="/jobseekers" className="nav_link">
              Jobseekers
            </NavLink>
            <NavLink to="/contact" className="nav_link">
              Contact Us
            </NavLink>
          </div>

          <div className="other_actions">
            <Link to="/login" className="customBtn">
              Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
