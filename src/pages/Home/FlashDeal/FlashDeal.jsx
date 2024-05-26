import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../Hooks/useProducts";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
const FlashDeal = () => {
  const [products] = useProducts();
  const arrival = products.filter((item) => item.category === "arrival");
  const hot = products.filter((item) => item.product === "hot");
  const [tabIndex, setTabIndex] = useState(0);

  //!
  const renderTabPanel = (productList) => (
    <div className="grid grid-flow-col grid-rows-2 gap-4">
      {productList.map((item) => (
        <div
          key={item._id}
          className={` relative flex flex-col w-full  max-w-xs mx-auto overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md`}
        >
          {/* ${index === 4 ? "row-span-2" : ""} */}
          <a
            className="relative flex h-full overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="object-cover"
              src={item.image}
              alt="product image"
            />
            <span className="absolute top-8 left-8 px-2 m-2 text-sm font-medium text-center text-white bg-[#0A5D5D] rounded-md">
              39% OFF
            </span>
          </a>
          <div className="px-5 pb-5 mt-4">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
            </a>
            <div className="flex items-center justify-between mt-2 mb-5">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  ${item.price}
                </span>
                <span className="text-sm line-through text-slate-900">
                  $299
                </span>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={item.rating}
                  readOnly
                />
              </p>
            </div>

            <Link className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <BiCart className="text-lg me-3"></BiCart>
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <section className="mx-auto max-w-[1760px] py-10">
        <SectionTitle heading={"Flash Deal"}></SectionTitle>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {["Hot", "Arrivel", "Ternding", "sales Off"].map((tab, index) => (
              <Tab key={index}>{tab}</Tab>
            ))}
          </TabList>
          <TabPanel>{renderTabPanel(hot)}</TabPanel>
          <TabPanel>{renderTabPanel(arrival)}</TabPanel>
          <TabPanel>{renderTabPanel(hot)}</TabPanel>
          <TabPanel>{renderTabPanel(arrival)}</TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default FlashDeal;
