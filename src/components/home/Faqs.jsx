import { Accordion } from "react-bootstrap";

export default function Faqs() {
  const faqs = [
    {
      title: "I am interested in working abroad. How can I apply?",
      text: "Visit our website and social media pages to check all job vacancies available. Once you have selected jobs that match your skill set, create an account on our website at www.platinumbrothers.com.ph. Go to the Login/Signup page and complete the registration process. Even if there are no suitable vacancies currently, you should register for future opportunities. After activating your account via the link sent to your email, complete your online application with detailed information to help our Recruitment Consultants match your profile with vacancies.",
    },
    {
      title: "Encountering problems while applying online?",
      text: "If you encounter issues while applying online, ensure your internet connection is stable and that your browser is up-to-date. For further assistance, contact our support team at support@platinumbrothers.com.ph or via our social media channels.",
    },
    {
      title: "What are the basic requirements to work abroad?",
      text: "Basic requirements include a valid passport, updated resume, and relevant certificates or licenses depending on the job role. Additional requirements may vary based on the employer and country of deployment.",
    },
    {
      title:
        "I am working abroad already but would like to work in Saudi, can I apply to Platinum Brothers?",
      text: "Yes, you can apply. Please ensure that your current employment contract allows you to switch jobs. Submit your application through our website and our team will assist you with the process.",
    },
    {
      title: "How do I know if I get shortlisted or selected for a job?",
      text: "If you are shortlisted, our Recruitment Team will contact you via email or phone with further instructions. Make sure your contact details are accurate and up-to-date.",
    },
    {
      title: "Do I need to go for an interview?",
      text: "Yes, an interview is typically required to assess your qualifications and suitability for the job. Our team will guide you on the process and provide the schedule if you are shortlisted.",
    },
    {
      title: "If I am selected, who will take care of processing my papers?",
      text: "Platinum Brothers will handle the processing of your documents, including visa applications and other necessary paperwork. You will be informed of any documents you need to provide.",
    },
    {
      title:
        "If I am currently employed, can I continue to work while Ikon is processing my documents?",
      text: "Yes, you can continue working while we process your documents. However, ensure your availability for any required appointments or interviews during the process.",
    },
    {
      title:
        "I have applied to Platinum Brothers several times but have not heard back.",
      text: "If you have not received a response, it may be due to a mismatch between your qualifications and current vacancies. Keep your profile updated and check for new job postings regularly.",
    },
    {
      title: "How much will Platinum Brothers charge me for their services?",
      text: "Platinum Brothers' service charges depend on the job type and destination country. All fees will be transparently communicated to you before proceeding.",
    },
  ];

  return (
    <section className="faqs_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2">
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className="col-lg-10 col-12 p-2">
            <Accordion defaultActiveKey="0">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <div className="num">{index + 1} -</div> {faq.title}
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
