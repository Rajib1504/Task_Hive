import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGift, FaUserFriends, FaCoins, FaCopy } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Refferal = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
      <>
       <SectionTitle
        heading={"Refer & Earn"}
        subHeading={"Invite your friends to TaskHive and earn bonus coins..."}
      ></SectionTitle> 
      <div className="w-11/12 p-4 mx-auto "> 
        <div className="w-full  mx-auto   bg-gradient-to-r from-buttonColor to-secondary rounded-lg text-white shadow-lg" data-aos="fade-up">
      
      <div className="flex flex-col lg:flex-row p-10 items-center gap-8">
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaUserFriends className="text-borderColor" /> Refer & Earn!
          </h2>
          <p className="text-lg mb-4">
            Invite your friends to TaskHive and earn **bonus coins** when they sign up & complete their first task. More friends = More rewards!
          </p>
          <button className="px-6 py-3 bg-borderColor flex gap-1 text-black font-semibold rounded-full hover:bg-buttonHover transition" data-aos="zoom-in"><FaCopy className="text-xl"/>
          <span>gMH7mYTd/tks-165645546-stock-photo-referrals-holographic</span>
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src="https://i.ibb.co/gMH7mYTd/depositphotos-165645546-stock-photo-referrals-man-working-on-holographic.webp"
            alt="Referral Bonus"
            className="w-80 h-auto"
          />
        </div>
      </div>
      <div className="mt-8 flex pb-2 justify-center gap-6" data-aos="fade-up">
        <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg shadow-md">
          <FaGift className="text-green-500" /> Get Rewarded Instantly
        </div>
        <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg shadow-md">
          <FaCoins className="text-yellow-500" /> Earn More with Every Referral
        </div>
      </div>
    </div>
    </div>
    </>

  );
};

export default Refferal;
