import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";

export default function WhyChooseOFW() {
  const [activeKey, setActiveKey] = useState("tab1");
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
                  <Nav.Item>
                    <Nav.Link eventKey="tab1">
                      Well-deserved Reputation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab2">Strong Work Ethic</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab3">Trustworthy & Dedicated</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

              <div className="col-lg-8 p-2 mt-lg-0 mt-3">
                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <p>
                      Overseas Filipino Workers (OFW) have earned a
                      well-deserved reputation as some of the most skilled and
                      trustworthy employees worldwide. With their exceptional
                      work ethic, adaptability and proficiency in various
                      industries, OFW’s have become highly sought after by
                      employers around the globe. This short introduction
                      explores the reason why hiring Filipino is a wise choice
                      for businesses seeking and dedicated workers.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <p>
                      Philippine Manpower or Skilled workers are renowned for
                      their strong work ethic and dedication to their job. This
                      commitment is rooted in the Filipino culture, which values
                      hand work perseverance and professionalism. Filipino
                      workers are known for their proficiency in a wide range of
                      industries many OFW’s undergo rigorous training and
                      education both within the Philippines and abroad. With the
                      strong communication skills, it made us effective
                      communicators in international work settings. This
                      linguistic advantage enables to interact with colleagues,
                      clients and customers from different cultural backgrounds.
                      Enhancing collaboration and productivity.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3">
                    <p>
                      The greatest overseas Filipino workers are highly skilled,
                      trust worthy and dedicated individual. The exceptional
                      work ethic adaptability, proficiency, communication skills
                      and loyalty make them valuable assets to any organization.
                      Employers who choose to hire Filipinos can expect reliable
                      and efficient workers who consistently deliver results
                      with their impressions track record and positive
                      reputation it is no wonder Filipino workers are high in
                      demand worldwide.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
}
