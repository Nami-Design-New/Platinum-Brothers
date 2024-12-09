import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 p-2">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <ul className="social_media">
              <li>
                <Link to="">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-2">
            <div className="footer_col">
              <h5>NAVIGATION</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/employers">Employers</Link>
                </li>
                <li>
                  <Link to="/jobseekers">Jobseekers</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://platinumbrothers.traffit.com/login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-2">
            <div className="footer_col">
              <h5>CONTACT US</h5>
              <ul>
                <li>
                  <h6>Phone:</h6>
                  <a href="tel:028-554-0408">028-554-0408 ( Manila )</a>
                  <a href="tel:032-253-0098">032-253-0098 ( Cebu )</a>
                  <a href="tel:082-228-7283">082-228-7283 ( Davao )</a>
                  <a href="tel:053-830-8878">053-830-8878 ( TACLOBAN )</a>
                </li>

                <li>
                  <h6>Email:</h6>
                  <a href="mailto:info@platinumbrothers.com">
                    info@platinumbrothers.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 p-2">
            <div className="copyRights">
              <p>
                Copyright 2025 © Platinum Brothers International Manpower Agency
                Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
