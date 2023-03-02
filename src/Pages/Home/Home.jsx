import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.scss";
import Hero from "./components/Hero/Hero";
import Community from "./components/Community/Community";
import Business from "./components/Business/Business";
import Campaigns from "./components/Campaigns/Campaigns";
import Investors from "./components/Investors/Investors";
import Founders from "./components/Founders/Founders";
import Registration from "./components/Registration page/Registration";
import Organiazction from "./components/Organizactions/Organizaction";
import Investments from "./components/Investments/Investments";
import Joinevents from "./components/Joinevents/Joinevents";
import Aboutus from "./components/Aboutus/Aboutus";
import Members from "./components/Members/Members";
import Faqs from "./components/Faqs/Faqs";
import Cardes from "./components/Cardes/Cardes";
import Footer from "../../Components/Footer/Footer";



const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Community /> 
      <Business/>
      <Campaigns />
      <Investors />
      <Founders />
      <Registration/>
      <Organiazction />
      <Investments />
      <Joinevents />
      <Aboutus />
      <Members />
      <Faqs/>
      <Cardes />
      <Footer /> 

    </>
  );
};

export default Home;
