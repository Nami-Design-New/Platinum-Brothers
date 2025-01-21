import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import useGetCities from "../../hooks/useGetCities";

export default function HeroSection() {
  const { data } = useGetCities();

  return (
    <section className="hero_section">
      <Swiper
        speed={500}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
      >
        {data?.sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="slide">
              <img src={slider.image} alt={slider.title} />
              <div className="content">
                <div className="container">
                  <h1>{slider.title}</h1>
                  <a href={slider.button_url}>
                    {slider.button_text}{" "}
                    <img src="/images/arrow.svg" alt="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
