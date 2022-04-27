import React from "react";
import { uesCart } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useWishList } from "../../Contexts/WishListContext";

const Cart = () => {
  const { cartItem, removeFromCartHandler } = uesCart();
  const { addWishlistHandler } = useWishList();

  // total Price details
  const totalPrice = cartItem.reduce(
    (acc, curr) => Number(curr.price) + Number(acc),
    0
  );
  const totalDiscount = cartItem.reduce(
    (acc, curr) => Number((curr.price * curr.discount) / 100) + Number(acc),
    0
  );
  const totalCartPrice = totalPrice - totalDiscount;

  return (
    <div>
      <main className="main-container">
        <section className="container">
          <h2 className="text-center">My Cart</h2>
          <div className="cart-grid grid-two-col">
            <div className="one">
              {cartItem.length === 0 ? (
                <>
                  <h3 className="py-1">cart is empty</h3>
                  <Link to={"/product-lists"}>
                    <span className="text-mark">Shop now</span>
                  </Link>
                </>
              ) : (
                cartItem.map(
                  ({ title, _id, image, discount, price, inStock }) => (
                    <div className="cart-card d-flex" key={_id}>
                      <img className="img-cart" src={image} alt="boy" />
                      <div className="cart-card-details">
                        <p className="h2">{title}</p>
                        <p className="h1 d-flex">
                          &#8377; {price}
                          <small className="line-through text-gray">
                            &#8377;
                            {Number(price) + Number((price * discount) / 100)}
                          </small>
                        </p>
                        <p className="text-gray">
                          <b>{discount}% off</b>
                        </p>
                        <p className="quantity">
                          <span>Quantity: </span>
                          <button>-</button>
                          <input
                            className="text-center"
                            type="number"
                            value="1"
                          />
                          <button>+</button>
                        </p>
                        <div className="btn-cart">
                          <button
                            onClick={() => {
                              addWishlistHandler({
                                title,
                                _id,
                                image,
                                discount,
                                price,
                                inStock,
                              });
                              removeFromCartHandler(_id);
                            }}
                            className="btn btn-cta-outline"
                          >
                            Move to wishlist
                          </button>
                          <button
                            onClick={() => removeFromCartHandler(_id)}
                            className="btn btn-error-outline"
                          >
                            Remove from cart
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
            <div className="two">
              <div className="cart-card-price-details">
                <table className="table full-vw">
                  <tbody>
                    <tr className="border-bottom">
                      <th colSpan="2">
                        <h2>Price details</h2>
                      </th>
                    </tr>
                    <tr>
                      <td>Price ({cartItem.length} items)</td>
                      <td>₹ {totalPrice}</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>-₹ {totalDiscount}</td>
                    </tr>
                    <tr className="border-bottom">
                      <td>Delivery charges</td>
                      <td>₹ 0</td>
                    </tr>
                    <tr className="border-bottom">
                      <td>
                        <b> Total Amount</b>
                      </td>
                      <td>
                        <b> ₹ {totalCartPrice}</b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        You will save <b>₹{totalDiscount} </b> on this order
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <button
                          disabled={cartItem.length === 0}
                          className="btn full-vw btn-cta"
                        >
                          Place order
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
