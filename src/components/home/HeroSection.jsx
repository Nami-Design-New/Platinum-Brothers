import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
  return (
    <section className="hero_section">
      <Swiper
        speed={500}
        loop="true"
        effect="fade"
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="slide">
            <img src="/images/s1.jpg" alt="" />
            <div className="content">
              <div className="container">
                <h1>Platinum Brothers</h1>
                <p>
                  We are a professional broker that provides services related to
                  the real estate industry.
                </p>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/s2.jpg" alt="" />
            <div className="content">
              <div className="container">
                <h1>Platinum Brokers</h1>
                <p>
                  We are a professional broker that provides services related to
                  the real estate industry.
                </p>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/s3.jpg" alt="" />
            <div className="content">
              <div className="container">
                <h1>Platinum Brokers</h1>
                <p>
                  We are a professional broker that provides services related to
                  the real estate industry.
                </p>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
