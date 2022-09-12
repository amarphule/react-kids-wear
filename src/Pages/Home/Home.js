import React from "react";
import Banner from "../../Components/Home/Banner";
import Category from "../../Components/Home/Category";
import NewArrival from "../../Components/Home/NewArrival";
const Home = () => {
  return (
    <div>
      <Banner />
      <NewArrival />
      <Category />
    </div>
  );
};

export default Home;
