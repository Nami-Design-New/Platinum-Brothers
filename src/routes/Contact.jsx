import { useState, useEffect } from "react";
import axiosService from "../hooks/axiosService";
import PageHeader from "../ui/layout/PageHeader";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    position: "",
    contactNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosService.post("/api/contact-form", formData);
      toast.success("Your inquiry has been submitted successfully!");
      setShow(false);
    } catch (err) {
      setError(err.message);
      toast.error("There was an error submitting your inquiry.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosService.get("/api/offices");
        setOffices(response.data.data);
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

  return (
    <>
      <PageHeader title={"Contact Us"} image={"/images/contact.jpg"} />

      <section className="contact_section">
        <div className="container">
          <div className="col-12 p-2">
            <h2>Contact Us</h2>
            <p className="contact_text">
              Thank you for visiting our website. Please contact us through any
              of the channels below to discuss your needs. We are ready to serve
              you and answer any questions you may have.
            </p>
          </div>
          <div className="col-12 p-2">
            <div className="employeer_contact">
              <div>
                <h4>ARE YOU AN EMPLOYER?</h4>
                <p>
                  Click the button on the right for the employer form, instead
                  of the employee form below.
                </p>
              </div>

              <button onClick={handleShow}>
                <img src="/images/mssge.svg" alt="mssge" /> contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ flexDirection: "column", alignItems: "start", gap: "8px" }}
        >
          <Modal.Title style={{ color: "#001489" }}>
            Online inquiry (Employers Only)
          </Modal.Title>
          <p style={{ color: "#777", padding: "0", margin: "0" }}>
            To make an inquiry, please fill out the form below, and we will get
            back to you as soon as possible.
          </p>
        </Modal.Header>
        <Modal.Body>
          <section className="contact_form">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 p-2">
                  <h3>CONTACT FORM</h3>
                  <form className="row" onSubmit={handleSubmit}>
                    <div className="col-lg-6 col-12 p-2">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-12 p-2">
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Name of Company"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-12 p-2">
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="Position"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-12 p-2">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-12 p-2">
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="Contact Number"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-12 p-2">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-12 p-2">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-12 p-2">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 p-2 mt-3 d-flex justify-content-center">
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>

      {/* Offices Section */}
      <section className="offices">
        <div className="container">
          <h2>OUR OFFICES</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            offices.map((office, index) => (
              <div key={index} className="row">
                <div className="col-lg-6 col-12 p-2">
                  {office.image ? (
                    <img
                      src={office.image}
                      alt="Office"
                      width="100%"
                      height="320"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.471903489129!2d120.98660252537064!3d14.572165277773141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2bba85a83f%3A0xf7a922b187c3686d!2zMTY4MCBNYWJpbmkgU3QsIE1hbGF0ZSwgTWFuaWxhLCAxMDA0IE1ldHJvIE1hbmlsYSwg2KfZhNmB2YTYqNmK2YY!5e0!3m2!1sar!2seg!4v1732628075620!5m2!1sar!2seg"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              /> */}
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <div className="content">
                    <h3>{office.title}</h3>
                    <ul>
                      <li>
                        <i className="fa-light fa-map-pin"></i>
                        {office.address}
                      </li>
                      <li>
                        <i className="fa-light fa-phone"></i>
                        <a href={`tel:${office.phone}`}>{office.phone}</a>
                      </li>
                      <li>
                        <i className="fa-light fa-envelope"></i>
                        <a href={`mailto:${office.email}`}>{office.email}</a>
                      </li>
                      <li>
                        <i className="fa-light fa-clock"></i> {office.from_time}{" "}
                        - {office.to_time}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
