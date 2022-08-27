import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const WishListContext = createContext();

const WishListProvoder = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const { isLoggedIn } = useAuth();

  const addWishlistHandler = (product) => {
    setWishlist((prevWish) => [...prevWish, product]);
  };

  const removeWishlistHandler = (id) => {
    const newWishlist = wishlist.filter((element) => element._id != id);
    setWishlist(newWishlist);
  };
  return (
    <WishListContext.Provider
      value={{
        isLoggedIn,
        wishlist,
        addWishlistHandler,
        removeWishlistHandler,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);

export default WishListProvoder;
