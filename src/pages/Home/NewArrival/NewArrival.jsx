import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Carousel from "./Carousel";
import img1 from "../../../../public/picture/slide1.jfif";
import img2 from "../../../../public/picture/slide2.jfif";
// import { useEffect, useState } from "react";
import Arrivel from "../../../Shared/Arrival/Arrivel";
import useProducts from "../../../Hooks/useProducts";

const NewArrival = () => {
  const [products] = useProducts();
  const arrival = products.filter((item) => item.category === "arrival");
  // const [arrival, setArrival] = useState([]);
  // useEffect(() => {
  //   fetch("resource.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const newArrivalItems = data.filter(
  //         (item) => item.category === "arrival"
  //       );
  //       setArrival(newArrivalItems);
  //       // console.log(data);
  //       console.log(newArrivalItems);
  //     });
  // }, []);

  return (
    <div>
      <section className="mx-auto max-w-[1760px] py-10 ">
        <SectionTitle heading={"New Arrival"}></SectionTitle>

        <div className="flex ">
          <div className="w-5/12 ">
            <Carousel></Carousel>
          </div>
          <div className="grid w-8/12 grid-cols-4 px-5 gap-7 ">
            {arrival.slice(0, 8).map((item) => (
              <Arrivel key={item._id} item={item}></Arrivel>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 mt-16 ">
          <div className="relative w-1/2 ">
            <div className="absolute right-0 z-10 left-16 bottom-1/2 ">
              <h2 className="text-5xl font-semibold uppercase">side table</h2>
              <p className="text-xl underline ">Discovery now</p>
            </div>
            <img
              className="object-cover w-full h-full rounded-lg drop-shadow-lg"
              src={img1}
              alt=""
            />
          </div>
          <div className="relative w-1/2">
            <div className="absolute z-10 left-16 bottom-1/2">
              <h2 className="text-5xl font-semibold uppercase">
                hanging light
              </h2>
              <p className="text-xl underline ">Discovery now</p>
            </div>
            <img
              className="object-cover w-full h-full rounded-lg drop-shadow-lg"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrival;
