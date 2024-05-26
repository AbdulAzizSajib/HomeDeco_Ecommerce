import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
const Aboutus = () => {
  const aboutUsData = [
    {
      service: "Extra Shiping",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      icon: <MdOutlineLocalShipping size={30} color="#0A5D5D" />,
    },
    {
      service: "Return Policy",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      icon: <MdOutlinePolicy size={30} color="#0A5D5D" />,
    },
    {
      service: "Payment Secured",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      icon: <RiSecurePaymentLine size={30} color="#0A5D5D" />,
    },
    {
      service: "Money Back Guarantee",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      icon: <TbReportMoney size={30} color="#0A5D5D" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 mt-16   md:grid-cols-2 lg:grid-cols-4  mx-auto   max-w-[1760px] ">
      {aboutUsData.map((data, index) => (
        <div key={index} className="p-8 text-center border-2 rounded-2xl">
          <div className="flex items-center justify-center gap-3">
            {data.icon}
            <h2 className="text-xl font-bold">{data.service}</h2>
          </div>
          <p className="text-xl font-extralight"> {data.details} </p>
        </div>
      ))}
    </div>
  );
};

export default Aboutus;
