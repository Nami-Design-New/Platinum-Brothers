import PageHeader from "./../ui/layout/PageHeader";

export default function Contact() {
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
              <h4>ARE YOU AN EMPLOYER?</h4>
              <p>
                Click the button on the right for the employer form instead of
                the employee form below.
              </p>
              <button>contact us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 p-2">
              <h3>CONTACT FORM</h3>
              <form className="row">
                <div className="col-lg-6 col-12 p-2">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <input type="tel" placeholder="Contact Number" />
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="col-12 p-2">
                  <input type="subject" placeholder="Subject" />
                </div>
                <div className="col-12 p-2">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="col-12 p-2 mt-3 d-flex justify-content-center">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="offices">
        <div className="container">
          <h2>OUR OFFICES</h2>
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.471903489129!2d120.98660252537064!3d14.572165277773141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2bba85a83f%3A0xf7a922b187c3686d!2zMTY4MCBNYWJpbmkgU3QsIE1hbGF0ZSwgTWFuaWxhLCAxMDA0IE1ldHJvIE1hbmlsYSwg2KfZhNmB2YTYqNmK2YY!5e0!3m2!1sar!2seg!4v1732628075620!5m2!1sar!2seg"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <h3>MANILA</h3>
                <ul>
                  <li>
                    <i className="fa-light fa-map-pin"></i>
                    2nd Floor LV. Oandasan Bldg. 1680 Mabini St. cor. Malvar
                    St., Malate, Manila, Philippines
                  </li>
                  <li>
                    <i className="fa-light fa-phone"></i>
                    <a href="tel:028-554-0408">028-554-0408</a>
                  </li>
                  <li>
                    <i className="fa-light fa-envelope"></i>
                    <a href="mailto:info@platinumbrothers.com.ph">
                      info@platinumbrothers.com.ph
                    </a>
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i> 9 AM - 6 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.6947945717081!2d123.89434156155885!3d10.310673236351239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999502ae05f1b%3A0x79b5c3e420531d73!2sMcDonald&#39;s%20Fuente%20Osmena!5e0!3m2!1sar!2seg!4v1732628830448!5m2!1sar!2seg"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <h3>CEBU</h3>
                <ul>
                  <li>
                    <i className="fa-light fa-map-pin"></i>
                    Room 317 Lim Tian He Building Fuente Osmeña Boulevard, Cebu
                    City (Landmark: Mcdonald’s Fuente)
                  </li>
                  <li>
                    <i className="fa-light fa-phone"></i>
                    <a href="tel:032-253-0098">032-253-0098</a>
                  </li>
                  <li>
                    <i className="fa-light fa-envelope"></i>
                    <a href="mailto:info@platinumbrothers.com.ph">
                      info@platinumbrothers.com.ph
                    </a>
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i> 9 AM - 6 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3379893500205!2d125.61295442545784!3d7.086760916362625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96da816fd0079%3A0xadab68f719dccf61!2sY.%20L%20Finance%20Building!5e0!3m2!1sar!2seg!4v1732628960221!5m2!1sar!2seg"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <h3>DAVO</h3>
                <ul>
                  <li>
                    <i className="fa-light fa-map-pin"></i>
                    Door 4&5 2nd Floor YL Finance Building Bajada, Davao City
                    (Landmark: Near NBI)
                  </li>
                  <li>
                    <i className="fa-light fa-phone"></i>
                    <a href="tel:082-228-7283">082-228-7283</a>
                  </li>
                  <li>
                    <i className="fa-light fa-envelope"></i>
                    <a href="mailto:info@platinumbrothers.com.ph">
                      info@platinumbrothers.com.ph
                    </a>
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i> 9 AM - 6 PM
                  </li>
                </ul>
              </div>
            </div>
            <div className="co-12 p-2 mt-4">
              <h6>Platinum Eastern Recruitment Agency</h6>
              <a href="tel:920003174">
                {" "}
                <i className="fa-light fa-phone"></i> 920003174
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
