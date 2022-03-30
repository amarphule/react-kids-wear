import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div> <main className="main-container">
    <section className="container">
      <h2 className="text-center">My Cart</h2>
      <div className="cart-grid grid-two-col">
        <div className="one">
          <div className="cart-card d-flex">
            <img className="img-cart" src="../asset/boy.jpg" alt="boy" />
            <div className="cart-card-details">
              <p className="h2">Boy premium shirt</p>
              <p className="h1 d-flex">
                ₹2000 <small className="line-through text-gray">₹3999</small>
              </p>
              <p className="text-gray"><b>50% off</b></p>
              <p className="quantity">
                <span>Quantity: </span>
                <button>-</button>
                <input className="text-center" type="number" value="1" />
                <button>+</button>
              </p>
              <div className="btn-cart">
                <button className="btn btn-cta-outline">Move to wishlist</button>
                <button className="btn btn-error-outline">
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
          <div className="cart-card d-flex">
            <img className="img-cart" src="../asset/boy.jpg" alt="boy" />
            <div className="cart-card-details">
              <p className="h2">Boy premium shirt</p>
              <p className="h1 d-flex">
                ₹2000 <small className="line-through text-gray">₹3999</small>
              </p>
              <p className="text-gray"><b>50% off</b></p>
              <p className="quantity">
                <span>Quantity: </span>
                <button>-</button>
                <input className="text-center" type="number" value="1" />
                <button>+</button>
              </p>
              <div className="btn-cart">
                <button className="btn btn-cta-outline">Move to wishlist</button>
                <button className="btn btn-error-outline">
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="cart-card-price-details">
            <table className="table full-vw">
              <tr className="border-bottom">
                <th colspan="2">
                  <h2>Price details</h2>
                </th>
              </tr>
              <tr>
                <td>Price (2 items)</td>
                <td>₹4999</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>-₹1999</td>
              </tr>
              <tr className="border-bottom">
                <td>Delivery charges</td>
                <td>₹499</td>
              </tr>
              <tr className="border-bottom">
                <td>Total Amount</td>
                <td>₹3499</td>
              </tr>
              <tr>
                <td colspan="2">You will save ₹1499 on this order</td>
              </tr>
              <tr>
                <td colspan="2">
                  <button className="btn full-vw btn-cta">Place order</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main></div>
  )
}

export default Cart