import React from "react";

const Product = ({ product }) => {
  const { _id, title, discount, price, categoryName, image, rating, inStock } =
    product;
  const discountedPrice = (price * discount) / 100;
  return (
    <div key={_id}>
      <div className="card">
        <img className="img-thumbnail" src={image} alt="boy" />
        <span className="card-badge card-badge-icon">
          <i className="fas fa-heart"></i>
        </span>
        <div className="card-details">
          <div className="title pt-1">{title}</div>
          <div className="subTitle text-l">
            <b>&#8377; {discountedPrice} </b>
            <span className="line-through text-gray text-md">
              &#8377; {price}
            </span>
          </div>
          <div>
            <span className="text-md subTitle pt-1">(Off {discount}%)</span>
          </div>
          {inStock ? (
            <div className="text-md">
              In Stock {rating}
              <span>
                <i class="fas fa-star"></i>
              </span>
            </div>
          ) : (
            <div className="error">
              Out of Stock {rating}
              <span>
                <i class="fas fa-star"></i>
              </span>
            </div>
          )}
          <button className="btn btn-cta">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
