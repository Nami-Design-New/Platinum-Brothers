import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ContactModal({
  show,
  handleClose,
  handleSubmit,
  loading,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    subject: "",
    message: "",
    type: "employee",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
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
                <form
                  className="row"
                  onSubmit={(e) => handleSubmit(e, formData)}
                >
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
                    <button
                      type="submit"
                      style={{
                        pointerEvents: loading ? "none" : "auto",
                        opacity: loading ? 0.5 : 1,
                      }}
                    >
                      Submit{" "}
                      {loading && (
                        <i className="fa-solid fa-spinner fa-spin"></i>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
