import { useState, useEffect } from "react";
import axiosService from "../../hooks/axiosService"; 
import { Link } from "react-router-dom";

export default function Features() {
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

  const { additional_service } = data || {};

  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h3>Additional Services</h3>
              <p>{additional_service?.text || "No description available."}</p>

              <h6 className="mb-0">
                Other services we offer to candidates include:
              </h6>

              <ul className="mb-4">
                {additional_service?.services?.length > 0 ? (
                  additional_service.services.map((service, index) => (
                    <li key={index}>
                      <i className="fa-regular fa-circle-check" /> {service}
                    </li>
                  ))
                ) : (
                  <li>No services available.</li>
                )}
              </ul>

              <div>
                <h6>For further information, please email us at: </h6>
                <Link to="mailto:info@platinumbrothers.com.ph">
                  <i className="fa-regular fa-envelope" />
                  info@platinumbrothers.com.ph
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="about_img">
              <img
                src={additional_service?.image || "/default-image.jpg"}
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
