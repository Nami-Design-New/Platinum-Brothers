export default function AboutSection() {
  return (
    <>
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <span className="section_hint">About us</span>
                <h2>Who We Are?</h2>
                <p>
                  Platinum Brothers International Manpower Agency Inc. (PBIMAI)
                  is one of the most renowned overseas employment agencies in
                  the Philippines, which is also authentic, and license approved
                  by the Ministry of labor and Employment, Government of
                  Philippines. Over the years of commitment to quality, we have
                  consistently been producing significant amount of successful
                  deployment to satisfy our clients worldwide. We have
                  specialized recruitment and deployment teams for the following
                  sectors:
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="img">
                <img src="/images/about.jpg" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular_service">
        <h2>Our Featured Services</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 p-2 text-center">
              <div className="service">
                <img src="/images/sec1.svg" alt="" />
                <h6>Skilled Domestic Workers</h6>
                <p>Hire skilled workers for your comfort and happiness.</p>
              </div>
            </div>
            <div className="col-md-4 col-12 p-2 text-center">
              <div className="service">
                <img src="/images/icon2.svg" alt="" />
                <h6>Cleaning and Maintenance</h6>
                <p>Staff for cleaning and regular home maintenance.</p>
              </div>
            </div>
            <div className="col-md-4 col-12 p-2 text-center">
              <div className="service">
                <img src="/images/icon3.svg" alt="" />
                <h6>Child and Elderly Care</h6>
                <p>Babysitters and caregivers for the elderly.</p>
              </div>
            </div>
            <div className="col-md-6 col-12 p-2 text-center">
              <div className="service">
                <img src="/images/icon4.svg" alt="" />
                <h6>Hospitality Services</h6>
                <p>Staff for events and guest services.</p>
              </div>
            </div>
            <div className="col-md-6 col-12 p-2 text-center">
              <div className="service">
                <img src="/images/icon1.svg" alt="" />
                <h6>Professional Chefs</h6>
                <p>Chefs to prepare delicious meals at home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
