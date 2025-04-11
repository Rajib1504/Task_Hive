import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Location = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-11/12 p-4 mx-auto my-12">
       <SectionTitle
        heading={"Expand Your Reach with Us"}
        subHeading={"Work from Anywhere, Anytime – Connect with Global Clients Today!"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Left Side - Image */}
        <div data-aos="fade-right">
          <img
            src="https://i.ibb.co/vvL9fzjW/1720369376-9351.jpg" // 
            alt="Our Global Reach"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Work from Anywhere, Anytime!
          </h2>
          <p className="text-gray-600 mt-4">
            TaskHive connects freelancers and businesses across the world. 
            Whether you're in New York or New Delhi, start earning today.
          </p>
          <ul className="mt-4 mb-6 space-y-2 text-gray-700">
            <li>🌍 Available in **150+ countries**</li>
            <li>💰 Payments in multiple currencies</li>
            <li>⚡ Instant task access from any device</li>
          </ul>
          <Link to={'/career'} button className=" bg-buttonColor text-white py-2 px-6 rounded-lg shadow-md hover:bg-buttonHover transition">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Location;
