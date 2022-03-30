import React from "react";
import Banner from "../../Components/Home/Banner";
import Category from "../../Components/Home/Category";
import NewArrival from "../../Components/Home/NewArrival";
import { useProductLists } from "../../Context/ProductContext";
const Home = () => {
  const { productLists } = useProductLists();
  const newArrival = productLists.filter((prod) => prod.tag);

  return (
    <div>
      <NewArrival newArrival={newArrival} />
      <Banner />
      <Category />
    </div>
  );
};

export default Home;
