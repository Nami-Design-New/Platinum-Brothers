import { Accordion } from "react-bootstrap";
import useGetHome from "../../hooks/useGetHome";

export default function Faqs() {
  const { data } = useGetHome();

  return (
    <section className="faqs_section" id="faqs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2">
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className="col-lg-10 col-12 p-2">
            <Accordion defaultActiveKey="0">
              {data?.faq.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <div className="num">{index + 1}</div> {faq.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{faq.text}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
