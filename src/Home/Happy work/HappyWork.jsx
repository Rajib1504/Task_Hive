import { FaPlay } from "react-icons/fa6";
import { MdGroup, MdHd, MdMoney } from "react-icons/md";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaArrowRight, FaMoneyBill } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UseRole from "../../Hooks/UseRole/UseRole";
const FeaturedBenefits = () => {
  const [role] = UseRole();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <SectionTitle
        heading={"Discover TaskHive Benefits"}
        subHeading={
          "Empowering your journey to success with seamless management, trust, and secure Payment."
        }
      ></SectionTitle>
      <div className="w-full md:w-11/12 p-4 mx-auto">
        <div className="py-14">
          <div
            className="bg-primary rounded-lg shadow-xl py-10 px-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
              {/* Left Side Content */}
              <div
                className="w-full "
                data-aos="slide-right"
                data-aos-delay="300"
              >
                <div className="mb-5 md:border-l-8 border-l-4 border-borderColor pl-4">
                  <h1 className="text-secondary md:text-3xl text-xl font-bold">
                    Why Choose TaskHive?
                  </h1>
                </div>
                <p
                  className="text-secondary md:text-lg text-sm mb-6"
                  data-aos="fade-in"
                  data-aos-delay="500"
                >
                  Unlock endless possibilities with seamless task management,
                  secure earnings, and a trusted community.
                </p>
                <ul
                  className="mb-6 space-y-3"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <li className="flex items-center">
                    <span className="bg-buttonColor p-2 rounded-full text-white mr-3">
                      <FaMoneyBill size={24} />
                    </span>
                    <span className="md:text-lg text text-secondary">
                      Secure Payments & Transactions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-buttonColor p-2 rounded-full text-white mr-3">
                      <MdGroup size={24} />
                    </span>
                    <span className="md:text-lg text text-secondary">
                      Growing Network of Trusted Workers
                    </span>
                  </li>
                </ul>

                <Link   to={`${
                (role === "Worker" && "/dashbord/workerHome") ||
                (role === "Buyer" && "/dashbord/buyerHome") ||
                (role === "Admin" && "/dashbord/adminHome")
              }`}
                  className="flex items-center gap-3 md:px-5 px-4 md:py-3 py-2 bg-buttonColor w-fit hover:bg-buttonHover btn btn-neutral text-lg rounded-lg text-white"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <FaArrowRight size={20} />
                  Get Started
                </Link>
              </div>

              {/* Right Side Image */}
              <div
                className="mt-10 lg:mt-0 lg:ml-10"
                data-aos="slide-left"
                data-aos-delay="400"
              >
                <img
                  src="https://i.ibb.co/2SdqXd7/img-happy-section-11zon-1-11zon.jpg"
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
