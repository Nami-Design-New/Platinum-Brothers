import useGetHome from "../../hooks/useGetHome";

export default function AboutSection() {
  const { data } = useGetHome();

  return (
    <>
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <div className="about_header">
                <h4>ABOUT US</h4>
                <h3>Platinum Brothers</h3>
                <p>
                  At Platinum Brothers International Manpower Agency Inc., we
                  take pride in our track record of success and we have
                  successfully matched countless employers with exceptional
                  talent, contributing growth and success of business across
                  various sectors our dedication. To client satisfaction and our
                  candidates career advancement sets us apart as a preferred
                  choice for manpower.
                </p>
                <br />
                <p>
                  Contact us today to learn more about our comprehensive
                  manpower services and how we can assist you in achieving your
                  staffing goals.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <h2>Who We Are?</h2>
                <p>{data?.who_are_we}</p>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="about_img">
                <img src="/images/about.png" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular_service">
        <div className="container">
          <div className="services">
            <div className="service">
              <img src="/images/sec1.svg" alt="" />
              <h6>Household Workers</h6>
            </div>
            <div className="service">
              <img src="/images/sec2.svg" alt="" />
              <h6>Hospitality & Gaming</h6>
            </div>
            <div className="service">
              <img src="/images/sec3.svg" alt="" />
              <h6>Healthcare</h6>
            </div>
            <div className="service">
              <img src="/images/sec4.svg" alt="" />
              <h6>Technical</h6>
            </div>
            <div className="service">
              <img src="/images/sec5.svg" alt="" />
              <h6>Others</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
