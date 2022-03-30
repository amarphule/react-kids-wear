import React from 'react'
import "./WishList.css"

const WishList = () => {
  return (
    <div><main class="main-container">
    <section class="container">
      <h2 class="text-center">My Wishlist</h2>
      <div class="d-flex justify-content-space-between">
        <div class="card">
          <img class="img-thumbnail" src="../asset/boy.jpg" alt="boy" />
          <span class="card-badge card-badge-icon">
            <i class="fas fa-heart"></i>
          </span>
          <div class="card-details">
            <div class="subTitle pt-1">Boy Premier Shirt</div>
            <div class="title">&#8377; 2000</div>
            <button class="btn btn-cta">Add to cart</button>
          </div>
        </div>
        <div class="card">
          <img class="img-thumbnail" src="../asset/boy.jpg" alt="boy" />
          <span class="card-badge card-badge-icon">
            <i class="fas fa-heart"></i>
          </span>
          <div class="card-details">
            <div class="subTitle pt-1">Boy Premier Shirt</div>
            <div class="title">&#8377; 2000</div>
            <button class="btn btn-cta">Add to cart</button>
          </div>
        </div>
        <div class="card">
          <img class="img-thumbnail" src="../asset/boy.jpg" alt="boy" />
          <span class="card-badge card-badge-icon">
            <i class="fas fa-heart"></i>
          </span>
          <div class="card-details">
            <div class="subTitle pt-1">Boy Premier Shirt</div>
            <div class="title">&#8377; 2000</div>
            <button class="btn btn-cta">Add to cart</button>
          </div>
        </div>
        <div class="card">
          <img class="img-thumbnail" src="../asset/boy.jpg" alt="boy" />
          <span class="card-badge card-badge-icon">
            <i class="fas fa-heart"></i>
          </span>
          <div class="card-details">
            <div class="subTitle pt-1">Boy Premier Shirt</div>
            <div class="title">&#8377; 2000</div>
            <button class="btn btn-cta">Add to cart</button>
          </div>
        </div>
        <div class="card">
          <img class="img-thumbnail" src="../asset/boy.jpg" alt="boy" />
          <span class="card-badge card-badge-icon">
            <i class="fas fa-heart"></i>
          </span>
          <div class="card-details">
            <div class="subTitle pt-1">Boy Premier Shirt</div>
            <div class="title">&#8377; 2000</div>
            <button class="btn btn-cta">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  </main></div>
  )
}

export default WishList