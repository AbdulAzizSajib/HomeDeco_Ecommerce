import img from "../../../../public/picture/chair/c17.png";
import CountDown from "../../../Components/CountDown/CountDown";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const DealOfTheDay = () => {
  return (
    <div>
      <SectionTitle heading={"Offer Day"}></SectionTitle>
      <section className="mx-auto rounded-2xl max-w-[1760px] py-10  px-20 bg-gray-100">
        <div className="flex items-center justify-between gap-4 ">
          <div className="w-1/2">
            <img className="object-cover w-full h-full" src={img} alt="" />
          </div>
          <div className="flex flex-col items-start w-1/2 space-y-5">
            <h2 className="text-5xl font-bold">Deal Of The Day</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur possimus eius recusandae commodi ab consequatur
              labore iusto temporibus. Repellat asperiores aut natus provident
              dolorem excepturi, alias error magni soluta architecto.
            </p>
            <CountDown></CountDown>
            <button className="btn btn-outline hover:bg-[#0B5D5D] bg-[#0B5D5D] text-white  border-none ">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealOfTheDay;
