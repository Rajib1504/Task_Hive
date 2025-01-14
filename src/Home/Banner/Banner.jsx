import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaCoins } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdPayment, MdWorkOutline } from "react-icons/md";
const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true} // Added loop property for infinite scrolling
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/XyYfGJ4/pexels-marily-torres-227778-776615-1.jpg"
            alt="image"
            className="w-full object-center h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary opacity-40 to-transparent"></div>
          <div className="absolute top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Unlock Your Earning Potential
            </h2>
            <p className="mt-4 text-sm sm:text-base max-w-md">
              Complete simple tasks, earn coins, and withdraw real money. Join
              the hive of opportunities!
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-4 py-3 bg-buttonColor hover:bg-buttonHover text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <FaCoins className="text-white" />
                  <p>Start Earning</p>
                </div>
              </button>
              <button className="mt-6 px-4 py-3 border-2 border-borderColor hover:bg-[#F5E2D7] hover:text-secondary text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <p>Explore Tasks</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/BqHQWQK/pexels-sora-shimazaki-5668517-1.jpg"
            alt="Burger Dish"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A45] to-transparent"></div> */}
          <div className="absolute top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Hire Top Talent for Micro-Tasks
            </h2>
            <p className="mt-4 text-sm sm:text-base max-w-md">
              Post tasks and get them completed by skilled workers. Fast,
              reliable, and efficient task management.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-4 py-3 bg-buttonColor hover:bg-buttonHover text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <AiOutlinePlusCircle className="text-white" />
                  <p>Post a Task</p>
                </div>
              </button>
              <button className="mt-6 px-4 py-3 border-2 border-borderColor hover:bg-[#F5E2D7] hover:text-secondary text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <p>See Submissions</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/hm5LwnX/pexels-leeloothefirst-6928994-1.jpg"
            alt="image"
            className="w-full h-64 sm:h-80 md:h-96 object-top lg:h-[500px] object-cover "
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A45] to-transparent"></div> */}
          <div className="absolute top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Grow Your Skills, Earn Rewards Grow Your Skills
            </h2>
            <p className="mt-4 text-sm sm:text-base max-w-md">
              Hone your skills while completing exciting tasks. TaskHive makes
              every second count.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-4 py-3 bg-buttonColor hover:bg-buttonHover text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <MdWorkOutline className="text-white" />
                  <p>Join as Worker</p>
                </div>
              </button>
              <button className="mt-6 px-4 py-3 border-2 border-borderColor hover:bg-[#F5E2D7] hover:text-secondary text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <p> View Tasks</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/vXN6w0p/pexels-jakubzerdzicki-28738504.jpg"
            alt="Smoothie"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover object-bottom"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A45] to-transparent"></div> */}
          <div className="absolute top-1/2 left-10 transform -translate-y-[50%] text-left text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Secure & Simple Payments
            </h2>
            <p className="mt-4 text-sm sm:text-base max-w-md">
              Seamlessly manage payments, withdrawals, and task rewards with our
              streamlined system.
            </p>
            <div className="flex items-center gap-4">
              <button className="mt-6 px-4 py-3 bg-buttonColor hover:bg-buttonHover text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <MdPayment className="text-white" />
                  <p>Manage Payments</p>
                </div>
              </button>
              <button className="mt-6 px-4 py-3 border-2 border-borderColor hover:bg-[#F5E2D7] hover:text-secondary text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-md">
                <div className="flex gap-2 items-center">
                  <p> Purchase Coins</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
