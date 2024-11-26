import { Link } from "react-router-dom";

export default function Features() {
  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h3>Additional Services</h3>
              <p>
                <b>Platinum Brothers International Manpower Agency Inc.</b>{" "}
                provides a hassle-free experience for both clients and
                candidates from the recruitment stage to well after the
                deployment of candidates. This is part of our commitment to
                provide the best possible experience for
              </p>

              <h6 className="mb-0">
                Other services we offer to candidates include:
              </h6>

              <ul className="mb-4">
                <li>
                  <i className="fa-regular fa-circle-check"></i> Financing
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i> Language Courses
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i> Medical Testing
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i> Visa Processing
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i> Skills Assessment
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i> Airport Assistance
                </li>
              </ul>

              <div>
                <h6>For further information, please email us at: </h6>
                <Link to="mailto:contact@Platinumbrothers.com.ph">
                  <i className="fa-regular fa-envelope"></i>{" "}
                  contact@Platinumbrothers.com.ph
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="about_img">
              <img src="/images/about2.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
