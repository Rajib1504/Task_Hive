import React from "react";
import Banner from "../Banner/Banner";
import BestWorkers from "../BestWorkers/BestWorkers";
import FaqSection from "../FaqSection/FaqSection";
import TotalWork from "../TotalWork/TotalWork";
import HappyWork from "../Happy work/HappyWork";
import Testimonials from "../Testimonials/Testimonials";
import Location from "../Location/Location";
import Refferal from "../Refferal/Refferal";

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* banner */}
      <Banner></Banner>
      {/* happy work  */}
      <HappyWork></HappyWork>
      {/* total work section  */}
      <TotalWork></TotalWork>
      {/* best worker section  */}
      <BestWorkers></BestWorkers>
      {/* refferal section  */}
      <Refferal/>
      {/* faq section  */}
      <FaqSection></FaqSection>
      {/* Testimonal section  */}
      <Testimonials></Testimonials>
      {/* location  */}
      <Location/>
    </div>
  );
};

export default Home;
