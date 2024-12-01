export default function WhatWeDo() {
  const industries = [
    "Household Workers",
    "IT Companies",
    "Technical Companies",
    "Oil & Gas Companies",
    "Medical Centers",
    "Restaurants",
    "Hotels, Resorts & Casinos",
    "Security Companies",
    "Spas",
    "Other Specialized Industries",
  ];

  const positions = [
    "Household Workers",
    "Construction Workers",
    "Mechanics",
    "Engineers",
    "Entertainers",
    "Hospitality Staff",
    "IT Professionals",
    "Marketing, Retail & Sales Staff",
    "Nurses",
    "Medical Technicians",
    "Caregivers",
    "Security & Surveillance Staff",
    "Spa & Salon Staff",
    "Teachers",
    "Others",
  ];

  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <img src="/images/about3.jpg" alt="about" className="about_img" />
          </div>
          <div className="col-lg-6 col-12 p-2 ps-lg-5 ps-2">
            <div className="content">
              <h3>What We Do?</h3>
              <p>
                <b>Platinum Brothers International Manpower Agency Inc.</b>{" "}
                (PBIMAI) is one of the most renowned overseas employment
                agencies in the Philippines, which is also authentic, and
                license approved by the Ministry of labor and Employment,
                Government of Philippines. Over the years of commitment to
                quality, we have consistently been producing significant amount
                of successful deployment to satisfy our clients worldwide. We
                have specialized recruitment and deployment teams for the
                following sectors:
              </p>
              <ul className="mb-4">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <i className="fa-regular fa-circle-check"></i> {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 p-2 mt-5">
            <h6>These positions include:</h6>
            <ul className="positions">
              {positions.map((position, index) => (
                <li key={index}>
                  <i className="fa-regular fa-circle-check"></i> {position}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
