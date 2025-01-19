import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import axiosService from "../../hooks/axiosService"; 

export default function Faqs() {
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

  const {faq } = data || {};
  return (
    <section className="faqs_section" id="faqs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2">
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className="col-lg-10 col-12 p-2">
            <Accordion defaultActiveKey="0">
              {faq.length > 0 ? (

                
                faq.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      <div className="num">{index + 1}</div> {faq.title}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{faq.text}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))
              ) : (
                <p>No FAQs available at the moment.</p>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
