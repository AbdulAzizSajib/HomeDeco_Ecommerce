import plant from "../../../../public/picture/plant/plant1.png";
import lmp from "../../../../public/picture/lmp.png";
import chair from "../../../../public/picture/chair/c12.png";

const MenuBanner = () => {
  return (
    <div className="mx-auto mt-16   max-w-[1760px]">
      <div className="grid gap-4 p-4 lg:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* 1st div */}
        <div className="relative flex flex-col ">
          <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-center w-1/2 p-4">
            <h2 className="text-xl font-bold uppercase lg:text-3xl xl:text-4xl">
              <span className="text-[#0a5d5d]">new</span> plants
            </h2>
            <p className="text-sm lg:text-base">Get up to 40% off</p>
            <button className="px-4 py-2 mt-2 text-white bg-black rounded-lg btn hover:bg-[#0A5D5D]">
              Shop now
            </button>
          </div>
          <div className="">
            <img className="w-full rounded-2xl" src={plant} alt="" />
          </div>
        </div>
        {/* 2nd */}
        <div className="relative flex flex-col ">
          <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-center w-1/2 p-4 text-white ">
            <h2 className="text-xl font-bold uppercase lg:text-3xl xl:text-4xl">
              <span className="text-[#aa8453]">chain</span> lamp
            </h2>
            <p className="text-sm lg:text-base">Get up to 60% off</p>
            <button className="px-4 py-2 mt-2 text-black bg-white border-none rounded-lg btn hover:bg-[#AA8453]">
              Shop now
            </button>
          </div>
          <div className="">
            <img className="w-full rounded-2xl" src={lmp} alt="" />
          </div>
        </div>
        {/* 3rd */}
        <div className="relative flex flex-col ">
          <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-center w-1/2 p-4">
            <h2 className="text-xl font-bold uppercase lg:text-3xl xl:text-4xl">
              <span className="text-[#0a5d5d]">new</span> Chair
            </h2>
            <p className="text-sm lg:text-base">Get up to 40% off</p>
            <button className="px-4 py-2 mt-2 text-white bg-black rounded-lg btn hover:bg-[#0A5D5D]">
              Shop now
            </button>
          </div>
          <div className="">
            <img className="w-full rounded-2xl" src={chair} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
