import React, { useState } from "react";
import { useWishList } from "../Contexts/WishListContext";

const Product = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const { _id, title, discount, price, categoryName, image, rating, inStock } =
    product;

  const discountedPrice = Number(price) + Number((price * discount) / 100);

  const addToCartHandler = () => {
    setIsInCart(true);
  };
  const removeFromCartHandler = () => {
    setIsInCart(false);
  };

  const { wishlist, setWishlist } = useWishList();

  const addWishlistHandler = (e) => {
    e.preventDefault();
    setWishlist((prevWish) => [...prevWish, product]);
  };
  const removeWishlistHandler = (e) => {
    e.preventDefault();
    const newWishlist = wishlist.filter((element) => element._id != _id);
    setWishlist(newWishlist);
  };
  return (
    <div className="card" key={_id}>
      <img className="img-thumbnail" src={image} alt={image} />
      {wishlist.find((element) => element._id === _id) ? (
        <span
          className="card-badge card-badge-icon"
          onClick={(e) => removeWishlistHandler(e)}
        >
          <i className="fas fa-heart"></i>
        </span>
      ) : (
        <span
          className="card-badge card-badge-icon"
          onClick={(e) => addWishlistHandler(e)}
        >
          <i class="far fa-heart"></i>
        </span>
      )}
      <div className="card-details">
        <div className="title pt-1">{title}</div>
        <div className="subTitle text-l">
          <b>&#8377; {price} </b>
          <span className="line-through text-gray text-md">
            &#8377; {discountedPrice}
          </span>
        </div>
        <div>
          <span className="text-md subTitle pt-1">(Off {discount}%)</span>
        </div>
        {inStock ? (
          <div className="text-md">
            In Stock
            <span style={{ marginLeft: "1rem" }}>
              {rating}
              <i className="fas fa-star"></i>
            </span>
          </div>
        ) : (
          <div className="error">
            Out of Stock
            <span style={{ marginLeft: "1rem" }}>
              {rating}
              <i className="fas fa-star"></i>
            </span>
          </div>
        )}
        {isInCart ? (
          <button className="btn btn-cta" onClick={removeFromCartHandler}>
            Remove from cart
          </button>
        ) : (
          <button className="btn btn-cta" onClick={addToCartHandler}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
