import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { BsQuote } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <SectionTitle heading={"Testimonials"}></SectionTitle>
      <section className="mx-auto  max-w-[1760px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex  bg-[#F5F5F5]   w-[500px] h-[500px] rounded-2xl border">
                <div className="flex flex-col items-center px-8 py-4 ">
                  <img className="rounded-full " src={review.image} alt="" />
                  <h2 className="text-2xl font-bold text-center">
                    {review.name}
                  </h2>
                  <p className="text-lg font-bold text-center">CEO Creative</p>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <div>
                    <BsQuote className="text-4xl text-center"></BsQuote>
                    <p>{review.details}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;

// {
//   reviews.map((review) => (
//     <SwiperSlide key={review._id}>
//       <div className="flex justify-center py-6">
//         <div className="flex flex-col items-center w-1/2">
//           <img className="w-[180px]" src={profile1} alt="" />
//           <h2 className="text-2xl font-bold text-center">{review.name}</h2>
//           <p className="text-lg font-bold text-center">CEO Creative</p>
//           <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
//           <div>
//             <BsQuote className="text-4xl text-center"></BsQuote>
//             <p>{review.details}</p>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>
//   ));
// }
