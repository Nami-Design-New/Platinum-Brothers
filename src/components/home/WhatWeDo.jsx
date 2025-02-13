import useGetHome from "../../hooks/useGetHome";

export default function WhatWeDo() {
  const { data } = useGetHome();

  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <img
              src={data?.what_we_do.image}
              alt="about"
              className="about_img"
            />
          </div>
          <div className="col-lg-6 col-12 p-2 ps-lg-5 ps-2">
            <div className="content">
              <h3>What We Do?</h3>
              <p>{data?.what_we_do.text}</p>
              <ul className="mb-4">
                {data?.what_we_do.services.map((service, index) => (
                  <li key={index}>
                    <i className="fa-regular fa-circle-check"></i> {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="col-12 p-2 mt-5">
            <h6>These positions include:</h6>
            <ul className="positions">
              {data?.what_we_do.positions?.length > 0 ? (
                data?.what_we_do.positions.map((position, index) => (
                  <li key={index}>
                    <i className="fa-regular fa-circle-check"></i> {position}
                  </li>
                ))
              ) : (
                <li>No positions available.</li>
              )}
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}
