import { Helmet } from "react-helmet-async";
import Aboutus from "../Aboutus/Aboutus";
import Banner from "../Banner/Banner";
import MenuBanner from "../MenuBanner/MenuBanner";
import NewArrival from "../NewArrival/NewArrival";
import Testimonials from "../Testimonials/Testimonials";
import FlashDeal from "../FlashDeal/FlashDeal";
import LatestNews from "../LatestNews/LatestNews";
import DealOfTheDay from "../DealOfTheDay/DealOfTheDay";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HomeDeco | Home</title>
      </Helmet>
      <Banner></Banner>
      <MenuBanner></MenuBanner>
      <Aboutus></Aboutus>
      <NewArrival></NewArrival>
      <FlashDeal></FlashDeal>
      <LatestNews></LatestNews>
      <DealOfTheDay></DealOfTheDay>
      <Testimonials></Testimonials>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
