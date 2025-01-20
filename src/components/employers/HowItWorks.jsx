import React, { useState, useEffect } from "react";
import useGetEmployee from "../../hooks/useGetEmployeePage";

export default function HowItWorks() {
  const { data, isLoading } = useGetEmployee();


  return (
    <section className="how_it_works">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h1>{data?.first_section.title}</h1>
              <p>{data?.first_section.text}</p>
              <ul>
                {data?.first_section.options.map((option, index) => (
                  <li key={index}>
                    <img src="/images/check.svg" alt="check" /> {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2 mt-5 mt-lg-0">
            <div className="about_img">
              <img src={data?.first_section.image} alt="about" />
            </div>
          </div>
          <div className="col-12 p-2 mt-5">
            <div className="content gap-1">
              {data?.first_section.text_2.split("\r\n\r\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
