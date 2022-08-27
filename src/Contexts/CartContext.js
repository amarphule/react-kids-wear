import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCartHandler = (product) => {
    setCartItem((prevProd) => [...prevProd, product]);
  };

  const removeFromCartHandler = (id) => {
    const newCartItem = cartItem.filter((item) => item._id != id);
    setCartItem(newCartItem);
  };
  console.log(cartItem);

  return (
    <CartContext.Provider
      value={{ cartItem, addToCartHandler, removeFromCartHandler }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const uesCart = () => useContext(CartContext);

export default CartProvider;
