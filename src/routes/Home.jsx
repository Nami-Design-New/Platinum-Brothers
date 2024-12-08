import { useEffect } from "react";
import AboutSection from "../components/home/AboutSection";
import ApplyNow from "../components/home/ApplyNow";
import Faqs from "../components/home/Faqs";
import Features from "../components/home/Features";
import HeroSection from "../components/home/HeroSection";
import WhatWeDo from "../components/home/WhatWeDo";
import WhyChooseOFW from "../components/home/WhyChooseOFW";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      if (location.hash.split("#")[1]) {
        const element = document.getElementById(location.hash.split("#")[1]);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  }, [location]);

  return (
    <>
      <HeroSection />
      <WhyChooseOFW />
      <ApplyNow />
      <AboutSection />
      <WhatWeDo />
      <section className="statistics_section">
        <div className="container">
          <div className="row h-100 justify-content-center">
            <div className="col-lg-4 col-12 h-100">
              <div className="content">
                <div className="img">
                  <img src="/images/sa.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <h2>
                  Over the years, we have deployed <br /> thousands of
                  candidates to <br />
                  Kingdom of Saudi Arabia.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Faqs />
    </>
  );
}
