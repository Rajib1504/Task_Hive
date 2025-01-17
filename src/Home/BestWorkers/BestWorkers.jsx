import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaCoins } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import useAxiosPublic from "./../../Hooks/UseAxios/useAxiosPublic";
import { useEffect, useState } from "react";

const BestWorkers = () => {
  const axiosPublic = useAxiosPublic();
  const [topUsers, setTopUsers] = useState([]);
  console.log(topUsers);
  useEffect(() => {
    if (axiosPublic) {
      axiosPublic
        .get("/top-users")
        .then((res) => {
          const data = res.data;
          setTopUsers(data);
        })
        .catch((err) => {
          console.error("Error fetching top users:", err.message);
        });
    }
  }, [axiosPublic]); // Rerun when `axiosPublic` changes
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

      <Marquee pauseOnClick={true} speed={40}>
        {topUsers.map((topUser, idx) => (
          <div key={topUser._id}>
            <div className=" flex gap-3 justify-center mx-4">
              <div className="border-2 hover:shadow-md w-full max-w-sm flex flex-col items-center p-8 gap-3 rounded-lg">
                {/* Avatar */}
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={topUser?.photo} alt="Image" />
                  </div>
                </div>
                {/* Title */}
                <div className="badge font-bold">
                  Rank: <span className="text-yellow-500 ">{idx + 1} </span>
                </div>

                <h3 className="font-semibold text-xl">{topUser.name}</h3>
                {/* Description */}
                <div className="truncate w-full flex gap-1 justify-center items-center text-center">
                  <p className="text-bold">Email:</p>
                  <p>{topUser.email}</p>
                </div>
                {/* Coins */}
                <div className="flex badge py-3 hover:scale-105 hover:duration-300 text-lg px-4 gap-2 bg-buttonColor justify-center items-center">
                  <FaCoins className="text-white" />
                  <h3 className="text-yellow-400">{topUser.Coins}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default BestWorkers;
