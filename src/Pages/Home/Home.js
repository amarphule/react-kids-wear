import React from "react";
import Banner from "../../Components/Home/Banner";
import Category from "../../Components/Home/Category";
import NewArrival from "../../Components/Home/NewArrival";
const Home = () => {
  return (
    <div>
      <NewArrival />
      <Banner />
      <Category />
    </div>
  );
};

export default Home;
