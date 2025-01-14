import React from "react";
import Banner from "../Banner/Banner";
import BestWorkers from "../BestWorkers/BestWorkers";
import FaqSection from "../FaqSection/FaqSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* banner */}
      <Banner></Banner>
      {/* best worker section  */}
      <BestWorkers></BestWorkers>
      {/* faq section  */}
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
