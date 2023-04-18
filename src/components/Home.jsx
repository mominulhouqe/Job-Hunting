import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Catagorys from "./Catagorys";
import Features from "./Features/FeatureContainer/Features";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="">
      <Header></Header>

      <Outlet></Outlet>
      <Banner></Banner>

      <Catagorys></Catagorys>
      <Features></Features>


      <Footer></Footer>
    </div>
  );
};

export default Home;
