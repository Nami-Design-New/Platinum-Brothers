import { Link } from "react-router-dom";
import useGetHome from "../../hooks/useGetHome";

export default function Features() {
  const { data } = useGetHome();

  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h3>Additional Services</h3>
              <p>{data?.additional_service.text}</p>

              <h6 className="mb-0">
                Other services we offer to candidates include:
              </h6>

              <ul className="mb-4">
                {data?.additional_service.services?.length > 0 ? (
                  data?.additional_service.services.map((service, index) => (
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
              <img src={data?.additional_service.image} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
