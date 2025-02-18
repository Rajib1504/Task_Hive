import { useEffect, useState } from "react";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// rating imports
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://task-hive-server-ten.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mb-6">
      <section className="w-11/12 mx-auto">
        <SectionTitle
          subHeading={"---What Our Clients Say---"}
          heading={"TESTIMONIALS"}
        ></SectionTitle>
        <div className="mb-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col gap-2 items-center justify-center mt-8 mb-16 mx-full sm:mx-36 text-center">
                  <FaQuoteLeft className="text-3xl" />
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p>{review.details}</p>
                  <h3 className="text-2xl py-4 font-light text-orange-400">
                    {review.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
