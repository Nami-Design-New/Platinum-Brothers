import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import axiosInstance from "../../hooks/axiosService"; 

export default function HeroSection() {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await axiosInstance.get("/api/slider-cities");
        setSliders(response.data.data.sliders || []); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching sliders:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  const duplicatedSliders =
    sliders.length < 3 ? [...sliders, ...sliders] : sliders;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="hero_section">
      <Swiper
        speed={500}
        loop={duplicatedSliders.length > 1}
        effect="fade"
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
      >
        {duplicatedSliders.map((slider) => (
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
