import { Swiper, SwiperSlide } from "swiper/react";
import gal1 from "../../../../public/picture/gal1.jfif";
import gal2 from "../../../../public/picture/gal2.jfif";
import gal3 from "../../../../public/picture/gal3.jfif";
import gal4 from "../../../../public/picture/gal4.jfif";
import gal5 from "../../../../public/picture/gal5.jfif";
import gal6 from "../../../../public/picture/gal6.jfif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Gallery = () => {
  return (
    <div className="mx-auto max-w-[1760px] py-10 ">
      <SectionTitle heading={"Product Gallery"}></SectionTitle>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={gal1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gal2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gal3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gal4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gal5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gal6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
