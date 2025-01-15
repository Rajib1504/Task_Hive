import { FaPlay } from "react-icons/fa6";
import { MdGroup, MdHd } from "react-icons/md";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const FeaturedBenefits = () => {
  return (
    <>
      <SectionTitle
        heading={"Discover TaskHive Benefits"}
        subHeading={
          "Empowering your journey to success with seamless management, trust, and secure Payment."
        }
      ></SectionTitle>
      <div className="w-full md:w-2/3 mx-auto">
        <div className="py-14">
          <div className="bg-primary rounded-lg shadow-xl py-10 px-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
              {/* Left Side Content */}
              <div className="w-full md:max-w-lg">
                <div className="mb-5 border-l-8 border-borderColor pl-4">
                  <h1 className="text-secondary text-3xl font-bold">
                    Why Choose TaskHive?
                  </h1>
                </div>
                <p className="text-secondary text-lg mb-6">
                  Unlock endless possibilities with seamless task management,
                  secure earnings, and a trusted community.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center">
                    <span className="bg-buttonColor p-2 rounded-full text-white mr-3">
                      <MdHd size={24} />
                    </span>
                    <span className="text-lg text-secondary">
                      Secure Payments & Transactions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-buttonColor p-2 rounded-full text-white mr-3">
                      <MdGroup size={24} />
                    </span>
                    <span className="text-lg text-secondary ">
                      Growing Network of Trusted Workers
                    </span>
                  </li>
                </ul>

                <button className="flex items-center gap-3 px-5 py-3 bg-buttonColor hover:bg-buttonHover text-lg rounded-lg text-white">
                  <FaPlay size={20} />
                  Get Started
                </button>
              </div>

              {/* Right Side Image */}
              <div className="mt-10 lg:mt-0 lg:ml-10">
                <img
                  src="https://i.ibb.co/F4N7dm9/pexels-edmond-dantes-8555673.jpg"
                  alt="Task Management"
                  className="rounded-lg shadow-lg w-full lg:w-[500px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBenefits;
