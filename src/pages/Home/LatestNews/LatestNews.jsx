import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from "../../../../public/picture/news1.jfif";
import img2 from "../../../../public/picture/news2.jfif";
import img3 from "../../../../public/picture/news3.jfif";
import img4 from "../../../../public/picture/news4.jfif";
import img5 from "../../../../public/picture/news5.jfif";
import img6 from "../../../../public/picture/news6.jfif";
import img7 from "../../../../public/picture/news7.jfif";
import img8 from "../../../../public/picture/news8.jfif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
const LatestNews = () => {
  const NewsData = [
    {
      date: "08 may 2024",
      title: "Modern solutions to all kinds of problems",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Novoluptatum rem amet!",
      img: img1,
    },
    {
      date: "08 may 2024",
      title: "Modern solutions to all kinds of problems",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Novoluptatum rem amet!",
      img: img2,
    },
    {
      date: "08 may 2024",
      title: "Modern solutions to all kinds of problems",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Novoluptatum rem amet!",
      img: img3,
    },
    {
      date: "08 may 2024",
      title: "Modern solutions to all kinds of problems",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Novoluptatum rem amet!",
      img: img4,
    },
    {
      date: "08 may 2024",
      title: "Modern solutions to all kinds of problems",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Novoluptatum rem amet!",
      img: img5,
    },
    {
      date: "08 may 2024",
      title: "Modern solutions to all kinds of problems",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Novoluptatum rem amet!",
      img: img6,
    },
    {
      date: "08 may 2024",
      title: "Modern solutions to all kinds of problems",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Novoluptatum rem amet!",
      img: img7,
    },
    {
      date: "08 may 2024",
      title: "Modern solutions to all kinds of problems",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Novoluptatum rem amet!",
      img: img8,
    },
  ];

  return (
    <div className="py-10">
      <SectionTitle heading={"Latest News"}></SectionTitle>
      <section className="">
        {/* ... */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {NewsData.map((news, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center w-full mx-auto lg:w-11/12 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <img
                    className="object-cover w-full h-full rounded-2xl"
                    src={news.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start w-full p-6 lg:w-1/2 md:p-8 lg:p-12">
                  <h2>{news.date}</h2>
                  <h2 className="mt-3 text-3xl font-semibold leading-none">
                    {news.title}
                  </h2>
                  <p className="mt-4 mb-8 text-sm">{news.details}</p>
                  <button className="px-10 text-lg font-medium btn rounded-3xl">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default LatestNews;
