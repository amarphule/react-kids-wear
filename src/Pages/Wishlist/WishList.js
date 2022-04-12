import React from "react";
import { useWishList } from "../../Contexts/WishListContext";
import Product from "../../Components/Product";

import "./WishList.css";
import { Link } from "react-router-dom";

const WishList = () => {
  const { wishlist } = useWishList();
  return (
    <main className="main-container">
      <section className="container">
        <h2 className="text-center">My Wishlist</h2>

        <Link to={"/product-lists"}>
          <span className="text-mark">Go to Product lists </span>
        </Link>

        {wishlist.length <= 0 ? (
          <h1 className="py-1">Wishlist is empty. Please add some products.</h1>
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
