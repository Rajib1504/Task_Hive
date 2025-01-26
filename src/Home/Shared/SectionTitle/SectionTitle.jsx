import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTitle = ({ heading, subHeading }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div
      className="text-center w-3/4 md:w-1/2 mx-auto my-14"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <h3
        className="md:text-3xl lg:text-4xl text-xl py-2 font-semibold"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        {heading}
      </h3>
      <p
        className="text-secondary mb-2 md:text-lg text-sm"
        data-aos="fade-right"
        data-aos-delay="350"
      >
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
