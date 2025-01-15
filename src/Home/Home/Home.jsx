import React from "react";
import Banner from "../Banner/Banner";
import BestWorkers from "../BestWorkers/BestWorkers";
import FaqSection from "../FaqSection/FaqSection";
import TotalWork from "../TotalWork/TotalWork";
import HappyWork from "../Happy work/HappyWork";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* banner */}
      <Banner></Banner>
      {/* happy work  */}
      <HappyWork></HappyWork>
      {/* total work section  */}
      <TotalWork></TotalWork>
      {/* best worker section  */}
      <BestWorkers></BestWorkers>
      {/* faq section  */}
      <FaqSection></FaqSection>
      {/* Testimonal section  */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
