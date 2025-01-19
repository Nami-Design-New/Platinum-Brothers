import React, { useState, useEffect } from "react";
import axiosService from "../../hooks/axiosService"; 

export default function Methods() {
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

  const { recruitments } = data;

  return (
    <section className="whyus methods" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12 p-2">
            <h5>OUR</h5>
            <h2>{recruitments.title}</h2>

            <h6>
            {recruitments.text}
            </h6>
            <ul>
                {recruitments.options.map((option, index) => (
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
