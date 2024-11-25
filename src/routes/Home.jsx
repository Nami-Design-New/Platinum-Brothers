import AboutSection from "../components/home/AboutSection";
import Faqs from "../components/home/Faqs";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />

      <section className="statistics_section">
        <div className="container">
          <div className="row h-100 justify-content-center">
            <div className="col-lg-8 col-12 h-100">
              <div className="content">
                <div className="img">
                  <img src="/images/sa.png" alt="" />
                </div>
                <h2>
                  We have deployed thousands of skilled candidates to the
                  Kingdom of Saudi Arabia over the years.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faqs />
    </>
  );
}
