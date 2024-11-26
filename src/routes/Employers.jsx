import { Link } from "react-router-dom";
import HowItWorks from "../components/employers/HowItWorks";
import HowWeDoIT from "../components/employers/HowWeDoIT";
import Methods from "../components/employers/Methods";
import Why from "../components/employers/Why";
import PageHeader from "../ui/layout/PageHeader";

export default function Employers() {
  return (
    <>
      <PageHeader title="Employers" image={"/images/hero.jpg"} />
      <HowItWorks />
      <Why />
      <HowWeDoIT />
      <Methods />

      <section className="parteners">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 p-2">
              <div className="content">
                <p>
                  In parallel with these activities, Platinum Brothers
                  International Manpower Agency Inc. takes a proactive approach
                  to recruitment with agents traveling throughout the
                  Philippines to directly source for key positions through its
                  18 recruitment centers.
                </p>
                <p>
                  Each candidate is made to go through a rigorous screening
                  process, which includes a series of interviews to assess
                  qualifications, job fitness and behavior.
                </p>
                <p>
                  After extensive screening, potential candidates are
                  short-listed and presented to clients
                </p>
                <Link
                  className="customBtn"
                  target="_blank"
                  to="https://platinumbrothers.traffit.com/login"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
