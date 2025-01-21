import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import useGetHome from "../../hooks/useGetHome";

export default function WhyChooseOFW() {
  const [activeKey, setActiveKey] = useState("tab0");
  const { data } = useGetHome();

  return (
    <section className="why_choose_ofw">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <h3>WHY CHOOSE OFWS?</h3>
            <h2>Overseas Filipino Workers</h2>
          </div>
          <Tab.Container
            activeKey={activeKey}
            onSelect={(key) => setActiveKey(key)}
          >
            <div className="row mt-lg-5 mt-3 p-0">
              <div className="col-lg-4 p-2">
                <Nav variant="pills" className="flex-column">
                  {data?.why_us.map((item, index) => (
                    <Nav.Item key={`nav-${index}`}>
                      <Nav.Link eventKey={`tab${index}`}>{item.title}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>

              <div className="col-lg-8 p-2 mt-lg-0 mt-3">
                <Tab.Content>
                  {data?.why_us.map((item, index) => (
                    <Tab.Pane eventKey={`tab${index}`} key={`pane-${index}`}>
                      <p>{item.text}</p>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
}
