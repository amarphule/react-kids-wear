import React from "react";
import { useWishList } from "../../Contexts/WishListContext";
import Product from "../../Components/Product";

import "./WishList.css";

const WishList = () => {
  const { wishlist } = useWishList();
  console.log(wishlist);
  return (
    <main className="main-container">
      <section className="container">
        <h2 className="text-center">My Wishlist</h2>
        {wishlist.length <= 0 ? (
          <h1>Wishlist is empty. Please add some products.</h1>
        ) : (
          <div className="grid">
            {wishlist.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default WishList;
