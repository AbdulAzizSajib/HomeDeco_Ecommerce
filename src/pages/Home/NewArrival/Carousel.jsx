import img1 from "../../../../public/picture/img1.jfif";
import img2 from "../../../../public/picture/img2.jfif";
import img3 from "../../../../public/picture/img3.jfif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "./Carousel.css";

const Carousel = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="absolute mySwiper "
      >
        <SwiperSlide>
          <img src={img1} className="object-cover w-full h-full rounded-2xl " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="object-cover w-full h-full rounded-2xl " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="object-cover w-full h-full rounded-2xl " />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
