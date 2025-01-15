import React from "react";
import Banner from "../Banner/Banner";
import BestWorkers from "../BestWorkers/BestWorkers";
import FaqSection from "../FaqSection/FaqSection";
import TotalWork from "../TotalWork/TotalWork";
import HappyWork from "../Happy work/HappyWork";

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
    </div>
  );
};

export default Home;
