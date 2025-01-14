import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaCoins } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const BestWorkers = () => {
  // Sample data for workers

  return (
    <>
      <SectionTitle
        heading={"TaskHive Stars"}
        subHeading={
          "Recognizing the top contributors who make every task count."
        }
      />
      {/* section of top workers */}

      {/* {workers.map((worker, index) => ( */}
      <Marquee pauseOnClick={true} speed={40}>
        <div className=" flex gap-3 justify-center mx-4">
          <div className="border-2 hover:shadow-md w-full max-w-sm flex flex-col items-center p-8 gap-3 rounded-lg">
            {/* Avatar */}
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src="https://i.ibb.co/XyYfGJ4/pexels-marily-torres-227778-776615-1.jpg"
                  alt="name"
                />
              </div>
            </div>
            {/* Title */}
            <div className="badge font-bold">
              Rank: <span className="text-yellow-500 "> 1</span>
            </div>

            <h3 className="font-semibold text-xl">worker name</h3>
            {/* Description */}
            <p className="truncate w-full text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              sapiente quas iure quo, labore officia repudiandae ad accusamus
              nostrum unde eius error explicabo quia numquam enim cupiditate
              neque doloremque odio!
            </p>
            {/* Coins */}
            <div className="flex badge py-3 hover:scale-105 hover:duration-300 text-lg px-4 gap-2 bg-buttonColor justify-center items-center">
              <FaCoins className="text-white" />
              <h3 className="text-yellow-400">Coins</h3>
            </div>
          </div>
        </div>
      </Marquee>
      {/* ))} */}
      {/* </div> */}
    </>
  );
};

export default BestWorkers;
