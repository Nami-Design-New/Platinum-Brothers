import React, { useState, useEffect } from "react";
import axiosService from "../../hooks/axiosService"; 

export default function Why() {
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

  const { second_section } = data;

  return (
    <section className="whyus">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12 p-2">
            <h5>Why</h5>
            <h2>{second_section.title}</h2>
            <ul>
              {second_section.options.map((option, index) => (
                <li key={index}>
                  <img src="/images/check.svg" alt="check" /> {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
