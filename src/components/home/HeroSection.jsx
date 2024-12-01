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
        autoplay={{ delay: 8000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="slide">
            <img src="/images/s1.jpg" alt="" />
            <div className="content">
              <div className="container">
                <a href="/contact">
                  Get Started <img src="/images/arrow.svg" alt="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/s2.jpg" alt="" />
            <div className="content">
              <div className="container">
                <a href="/contact">
                  Get Started <img src="/images/arrow.svg" alt="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/s3.jpg" alt="" />
            <div className="content">
              <div className="container">
                <a href="/contact">
                  Get Started <img src="/images/arrow.svg" alt="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
