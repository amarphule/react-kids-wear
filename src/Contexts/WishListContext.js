import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const WishListContext = createContext();

const WishListProvoder = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const { isLoggedIn } = useAuth();

  return (
    <WishListContext.Provider value={{ isLoggedIn, wishlist, setWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);

export default WishListProvoder;
