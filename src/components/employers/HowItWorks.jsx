import React, { useState, useEffect } from "react";
import axiosService from "../../hooks/axiosService"; 

export default function HowItWorks() {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosService.get("/api/employee-page"); 
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

  const { first_section } = data;

  return (
    <section className="how_it_works">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h1>{first_section.title}</h1>
              <p>{first_section.text}</p>
              <ul>
                {first_section.options.map((option, index) => (
                  <li key={index}>
                    <img src="/images/check.svg" alt="check" /> {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2 mt-5 mt-lg-0">
            <div className="about_img">
              <img src={first_section.image} alt="about" />
            </div>
          </div>
          <div className="col-12 p-2 mt-5">
            <div className="content gap-1">
              {first_section.text_2.split("\r\n\r\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
