import React from "react";
import Banner from "../Banner/Banner";
import BestWorkers from "../BestWorkers/BestWorkers";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* banner */}
      <Banner></Banner>
      <BestWorkers></BestWorkers>
    </div>
  );
};

export default Home;
