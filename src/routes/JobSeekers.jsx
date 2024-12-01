import { Link } from "react-router-dom";
import PageHeader from "../ui/layout/PageHeader";
import Pagination from "../ui/layout/Pagination";

export default function JobSeekers() {
  return (
    <>
      <PageHeader title="Jobseekers" image={"/images/jobs.jpg"} />
      <section className="jobseekers_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <div>
                  <h2>DREAMING OF A JOB OVERSEAS?</h2>
                  <h3>
                    Stop Searching,
                    <br />
                    Start Finding!
                  </h3>
                </div>

                <h6>Would you like to: </h6>

                <ul>
                  <li>
                    <img src="/images/check.svg" alt="check" /> Earn more money?
                  </li>
                  <li>
                    <img src="/images/check.svg" alt="check" /> Improve your
                    chances of getting hired?
                  </li>
                  <li>
                    <img src="/images/check.svg" alt="check" /> Find out about
                    the right job for you?
                  </li>
                  <li>
                    <img src="/images/check.svg" alt="check" /> Learn about job
                    and career opportunities all over the world?
                  </li>
                </ul>

                <p>
                  Then welcome to the family! Platinum Brothers International
                  Manpower Agency Inc, is here to help jobseekers find their
                  dream jobs abroad. We will help with your application and make
                  sure you are on the right track.
                </p>

                <p>
                  For further information, please refer to the{" "}
                  <b>frequently asked questions (FAQs)</b> or contact any of our
                  offices.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2 mt-5 mt-lg-0">
              <div className="about_img">
                <img
                  src="/images/seekers.jpg"
                  style={{ aspectRatio: "3 / 2", objectFit: "cover" }}
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="filter_section">
        <div className="container">
          <h2>Job Vacancies</h2>
          <form>
            <div className="input_field">
              <img src="/images/keyword.svg" alt="" />
              <input type="text" placeholder="Keyword" />
            </div>
            <div className="input_field">
              <img src="/images/country.svg" alt="" />
              <select>
                <option value="">Country</option>
              </select>
            </div>
            <div className="input_field">
              <img src="/images/star.svg" alt="" />
              <select>
                <option value="">Specialization</option>
              </select>
            </div>
            <button>
              <img src="/images/search.svg" alt="" />
            </button>
          </form>
        </div>
      </section>
      <section className="resumes">
        <div className="contianer">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-12 p-2 mb-2">
              <div className="cv">
                <div className="img">
                  <img src="/images/cv1.jpg" alt="cv1" />
                </div>
                <div className="content">
                  <div className="head">
                    <h3>Accounting Assistant</h3>
                    <h6>
                      <i className="fa-light fa-location-dot"></i> Maldives
                    </h6>

                    <div className="date">
                      <b>6</b>
                      <b>SEP</b>
                      <b>2024</b>
                    </div>
                  </div>

                  <div className="text">
                    <p>
                      Minimum of 2 years working experience is required for this
                      position. Applicants must be 25 to 45 years old.
                    </p>
                    <p>
                      Email your CV to contact@Platinumbrothers.com.ph with
                      Accounting Assistant as subject heading to apply.
                    </p>
                  </div>

                  <div className="actions">
                    <Link>Apply Now</Link>
                    <Link to="/jobseekers/1">More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-12 p-2 mb-2">
              <div className="cv">
                <div className="img">
                  <img src="/images/cv2.jpg" alt="cv1" />
                </div>
                <div className="content">
                  <div className="head">
                    <h3>Staff Nurses</h3>
                    <h6>
                      <i className="fa-light fa-location-dot"></i> KINGDOM OF
                      SAUDI ARABIA
                    </h6>

                    <div className="date">
                      <b>6</b>
                      <b>SEP</b>
                      <b>2024</b>
                    </div>
                  </div>

                  <div className="text">
                    <p>
                      At least 3 years post-license experience as staff nurse in
                      an health care facility.
                    </p>
                    <p>
                      Email your CV to contact@Platinumbrothers.com.ph with
                      Staff Nurse as subject heading to apply.
                    </p>
                  </div>

                  <div className="actions">
                    <Link>Apply Now</Link>
                    <Link to="/jobseekers/1">More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-12 p-2 mb-2">
              <div className="cv">
                <div className="img">
                  <img src="/images/cv3.jpg" alt="cv1" />
                </div>
                <div className="content">
                  <div className="head">
                    <h3>Domestic Helper</h3>
                    <h6>
                      <i className="fa-light fa-location-dot"></i> KINGDOM OF
                      SAUDI ARABIA
                    </h6>

                    <div className="date">
                      <b>6</b>
                      <b>SEP</b>
                      <b>2024</b>
                    </div>
                  </div>

                  <div className="text">
                    <p>
                      At least 2 years experience as domestic healthcare in any
                      Filipino household.
                    </p>
                    <p>
                      Email your CV to contact@Platinumbrothers.com.ph with
                      Accounting Assistant as subject heading to apply.
                    </p>
                  </div>

                  <div className="actions">
                    <Link>Apply Now</Link>
                    <Link to="/jobseekers/1">More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-12 p-2 mb-2">
              <div className="cv">
                <div className="img">
                  <img src="/images/cv4.jpg" alt="cv1" />
                </div>
                <div className="content">
                  <div className="head">
                    <h3>Construction Worker</h3>
                    <h6>
                      <i className="fa-light fa-location-dot"></i> KINGDOM OF
                      SAUDI ARABIA
                    </h6>

                    <div className="date">
                      <b>6</b>
                      <b>SEP</b>
                      <b>2024</b>
                    </div>
                  </div>

                  <div className="text">
                    <p>
                      At least 2 years experience as domestic healthcare in any
                      Filipino household.
                    </p>
                    <p>
                      Email your CV to contact@Platinumbrothers.com.ph with
                      Accounting Assistant as subject heading to apply.
                    </p>
                  </div>

                  <div className="actions">
                    <Link>Apply Now</Link>
                    <Link to="/jobseekers/1">More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-2">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
