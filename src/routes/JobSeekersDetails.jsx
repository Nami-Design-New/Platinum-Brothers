import { Link } from "react-router-dom";
import PageHeader from "../ui/layout/PageHeader";

export default function JobSeekersDetails() {
  return (
    <>
      <PageHeader title="Jobseekers" image={"/images/jobs.jpg"} />

      <section className="jobseekers_details_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2 order-lg-0 order-1">
              <div className="content">
                <div className="head">
                  <h2>Staff Nurses</h2>
                  <p className="mb-2">
                    <i className="fa-regular fa-location-dot"></i> KINGDOM OF
                    SAUDI ARABIA
                  </p>
                  <p>
                    <i className="fa-regular fa-briefcase"></i> Nursing
                  </p>
                </div>
                <div className="list">
                  <h6>Requirements</h6>
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> This job
                      requires female applicants only.
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Minimum of
                      2 year(s) working experience is required for this
                      position.
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Applicants
                      must be 25 to 45 years old.
                    </li>
                  </ul>
                </div>
                <div className="list">
                  <h6>Job Details / Description:</h6>
                  <p>
                    Nurses play a critical role in healthcare, providing care
                    and support to patients, assisting doctors, and ensuring the
                    smooth operation of medical facilities. They work in various
                    settings, including hospitals, clinics, schools, nursing
                    homes, and private homes.
                  </p>
                </div>
                <div className="list">
                  <h6>Qualifications:</h6>
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> At least
                      related 2 years working experience as Accounting Assitant
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Must have a
                      Diploma or a Degree in Accounting
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Experience
                      with bookkeeping practices
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>{" "}
                      Understanding of filing systems
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>{" "}
                      Mathematical skills
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>{" "}
                      Administrative skills
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>{" "}
                      Organizational skills
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Attention
                      to detail
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Experience
                      with bookkeeping practices
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Experience
                      with bookkeeping practices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2  order-lg-1 order-0">
              <div className="about_img">
                <img src="/images/cv2.jpg" alt="about" />
              </div>
            </div>
            <div className="col-12 p-2 order-2">
              <p>
                Qualified applicants should apply with a comprehensive resume
                and detailed job experience, copies of diplomas (high
                school/college), transcripts of records, employment
                certificates, training certificates, latest 2x2 and whole body
                photos, and a copy of passport (if available).
              </p>
              <p>PLEASE INDICATE WHICH POSITION YOU ARE APPLYING FOR.</p>

              <p>
                Email your CV to:{" "}
                <a href="mailto:contact@platinumbrothers.com.ph">
                  contact@platinumbrothers.com.ph
                </a>
              </p>

              <div className="bottom_action">
                <div className="share">
                  <p>Share: </p>

                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <Link to="/jobseekers" className="back_btn">
                  Back to List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
