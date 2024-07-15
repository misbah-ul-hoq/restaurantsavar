import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import StarRating from "./StarRating";
import api from "../../api/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    api.get("/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <section className="reviews-wrapper mx-auto max-w-[1096px]">
      <SectionTitle subHeading="What our clients say" heading="testimonials" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-16 flex flex-col items-center gap-4">
              <StarRating rating={review.rating} />
              <svg
                enableBackground="new 0 0 500 500"
                height="70px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 500 500"
                width="70px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  clipRule="evenodd"
                  d="M36.992,416.569c0,20.078,16.262,36.344,36.34,36.344h118.111  c20.079,0,36.343-16.266,36.343-36.344V271.202c0-20.079-16.264-36.342-36.343-36.342h-58.328c-10.089,0-18.17-8.177-18.17-18.17  c0-3.271,0.815-5.542,0.815-5.542c13.264-43.977,46.785-79.227,89.762-94.852l0.18-0.182c12.997-5.54,22.083-18.445,22.083-33.437  c0-20.077-16.264-36.341-36.343-36.341c-4.906,0-9.536,0.998-13.804,2.723l-1.644,0.64C94.68,81.405,36.992,160.45,36.992,253.03  V416.569z M273.215,416.569c0,20.078,16.262,36.344,36.341,36.344h118.112c20.078,0,36.34-16.266,36.34-36.344V271.202  c0-20.079-16.262-36.342-36.34-36.342h-58.33c-10.088,0-18.169-8.177-18.169-18.17c0-3.362,0.813-5.542,0.813-5.542  c13.267-43.977,46.787-79.227,89.765-94.852l0.18-0.182c12.995-5.54,22.081-18.445,22.081-33.437  c0-20.077-16.262-36.341-36.34-36.341c-4.906,0-9.538,0.998-13.805,2.723l-1.644,0.64C330.903,81.405,273.215,160.45,273.215,253.03  V416.569z"
                  fill="#010101"
                  fillRule="evenodd"
                />
              </svg>
              <p className="text-center">{review.details}</p>
              <h3 className="text-3xl font-semibold uppercase text-[#CD9003]">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
