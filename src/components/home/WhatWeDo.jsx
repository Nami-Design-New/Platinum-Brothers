import { useState, useEffect } from "react";
import axiosService from "../../hooks/axiosService"; 

export default function WhatWeDo() {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosService.get("/api/homeSections");
        setData(response.data.data);  
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const { what_we_do } = data || {};

  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <img
              src={what_we_do?.image || "/default-image.jpg"} 
              alt="about"
              className="about_img"
            />
          </div>
          <div className="col-lg-6 col-12 p-2 ps-lg-5 ps-2">
            <div className="content">
              <h3>What We Do?</h3>
              <p>{what_we_do?.text || "No description available."}</p> 
              <ul className="mb-4">
                {what_we_do?.services?.length > 0 ? (
                  what_we_do.services.map((service, index) => (
                    <li key={index}>
                      <i className="fa-regular fa-circle-check"></i> {service}
                    </li>
                  ))
                ) : (
                  <li>No services available.</li> 
                )}
              </ul>
            </div>
          </div>
          <div className="col-12 p-2 mt-5">
            <h6>These positions include:</h6>
            <ul className="positions">
              {what_we_do?.positions?.length > 0 ? (
                what_we_do.positions.map((position, index) => (
                  <li key={index}>
                    <i className="fa-regular fa-circle-check"></i> {position}
                  </li>
                ))
              ) : (
                <li>No positions available.</li> 
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
