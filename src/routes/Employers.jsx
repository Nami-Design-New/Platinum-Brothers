import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HowItWorks from "../components/employers/HowItWorks";
import HowWeDoIT from "../components/employers/HowWeDoIT";
import Methods from "../components/employers/Methods";
import Why from "../components/employers/Why";
import PageHeader from "../ui/layout/PageHeader";
import Modal from "react-bootstrap/Modal";
import "swiper/css";

export default function Employers() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <PageHeader title="Employers" image={"/images/hero.jpg"} />
      <HowItWorks />
      <Why />
      <HowWeDoIT />
      <Methods />
      <section className="parteners">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 p-2">
              <div className="content">
                <p>
                  In parallel with these activities,{" "}
                  <b>Platinum Brothers International Manpower Agency Inc.</b>{" "}
                  takes a proactive approach to recruitment with agents
                  traveling throughout the Philippines to directly source for
                  key positions through its 18 recruitment centers.
                </p>
                <p>
                  Each candidate is made to go through a rigorous screening
                  process, which includes a series of interviews to assess
                  qualifications, job fitness and behavior.
                </p>
                <p>
                  After extensive screening, potential candidates are
                  short-listed and presented to clients
                </p>
                <Link onClick={handleShow} className="customBtns">
                  Get Started
                  <img src="/images/arrow.svg" alt="arrow-right" style={{}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* modal*/}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ flexDirection: "column", alignItems: "start", gap: "8px" }}
        >
          <Modal.Title style={{ color: "#001489" }}>
            Online inquiry (Employers Only)
          </Modal.Title>
          <p style={{ color: "#777", padding: "0", margin: "0" }}>
            To Make an inquiry , Please fill out The Form below and we Will get
            back to you as soon as possible
          </p>
        </Modal.Header>
        <Modal.Body>
          <section className="contact_form">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 p-2">
                  <h3>CONTACT FORM</h3>
                  <form className="row">
                    <div className="col-lg-6 col-12 p-2">
                      <input type="text" placeholder="First Name" />
                    </div>

                    <div className="col-lg-6 col-12 p-2">
                      <input type="text" placeholder="Name of Company" />
                    </div>
                    <div className="col-lg-6 col-12 p-2">
                      <input type="text" placeholder="Position" />
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
        </Modal.Body>
      </Modal>

      <secton className="logos">
        <div className="container">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="img">
                <img src="/images/p1.svg" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="img">
                <img src="/images/p2.svg" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="img">
                <img src="/images/p3.svg" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="img">
                <img src="/images/p4.svg" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="img">
                <img src="/images/p5.svg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </secton>
    </>
  );
}
