// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../../../public/picture/ban1.jpg";
import banner2 from "../../../../public/picture/ban2.jpg";

const bannerData = [
  {
    title: "Modern Living Room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacinia nunc, at dignissim nibh",
    image: banner1,
  },
  {
    title: "Modern Living Room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacinia nunc, at dignissim nibh",
    image: banner2,
  },
];

const Banner = () => {
  return (
    <Swiper pagination={false} modules={[Pagination]} className="mySwiper">
      {bannerData.map((banner, index) => (
        <SwiperSlide key={index} className="relative min-h-screen border">
          <img
            className="object-cover w-full h-full min-h-screen"
            src={banner.image}
            alt=""
          />
          <div className="absolute left-0 right-0 flex flex-col items-center justify-center text-white top-44">
            <div className="p-4 space-y-4 text-center">
              <h2 className="text-3xl font-normal sm:text-4xl md:text-5xl lg:text-7xl">
                {banner.title}
              </h2>
              <p className="text-sm font-normal sm:text-base md:text-lg">
                {banner.description}
              </p>
              <button className="text-white  btn btn-outline px-8 outline-none hover:bg-[#0A5D5D] hover:border-white  ">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
