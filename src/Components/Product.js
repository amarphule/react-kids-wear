import React from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { uesCart } from "../Contexts/CartContext";
import { useWishList } from "../Contexts/WishListContext";

const Product = ({ product }) => {
  const { _id, title, discount, price, categoryName, image, rating, inStock } =
    product;

  const discountedPrice = Number(price) + Number((price * discount) / 100);

  const { wishlist, addWishlistHandler, removeWishlistHandler } = useWishList();

  const { cartItem, addToCartHandler, removeFromCartHandler } = uesCart();

  const { isLoggedIn } = useAuth();

  return (
    <div className="card" key={_id}>
      <img className="img-thumbnail" src={image} alt={image} />
      {wishlist.find((element) => element._id === _id) ? (
        <span
          className="card-badge card-badge-icon"
          onClick={() => removeWishlistHandler(_id)}
        >
          <i className="fas fa-heart"></i>
        </span>
      ) : (
        <span
          className="card-badge card-badge-icon"
          onClick={() => addWishlistHandler(product)}
        >
          <i className="far fa-heart"></i>
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
        {cartItem.find((item) => item._id === _id) ? (
          <button
            className="btn btn-error"
            onClick={() => removeFromCartHandler(_id)}
          >
            Remove from cart
          </button>
        ) : isLoggedIn ? (
          <button
            className="btn btn-cta"
            onClick={() => {
              addToCartHandler(product);
              removeWishlistHandler(_id);
            }}
            disabled={!inStock ? true : ""}
          >
            Add to cart
          </button>
        ) : (
          <Link className="btn btn-cta" to="/login">
            Add to cart
          </Link>
        )}
      </div>
    </div>
  );
};

export default Product;
