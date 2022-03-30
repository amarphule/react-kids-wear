import React from 'react'

const Filters = () => {
  return (
    <div>  
        <aside className="left-sidebar">
    <div
      className="sidebar-heading d-flex justify-content-space-between baseline"
    >
      <h2>Filter</h2>
      <h3><a className="btn btn-link" href="#">Clear</a></h3>
    </div>
    <div className="sidebar-heading">
      <div className="slide-container">
        <h3>Price</h3>
        <p className="d-flex justify-content-space-between">
          <span className="price">50</span>
          <span className="price">150</span>
          <span className="price">200</span>
        </p>
        <input type="range" id="range" />
      </div>
      <div className="category-container">
        <h3>Category</h3>
        <ul className="list-items">
          <li className="list-item">
            <input type="checkbox" id="boy" />
            <label for="#boy">Boy clothing</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="girl" />
            <label for="#girl">Girl clothing</label>
          </li>
        </ul>
      </div>
      <div className="rating-container">
        <h3>Rating</h3>
        <ul className="list-items">
          <li className="list-item">
            <input type="radio" id="four-above" />
            <label for="#four-above"> 4 starts & above</label>
          </li>
          <li className="list-item">
            <input type="radio" id="three-above" />
            <label for="#three-above">3 starts & above</label>
          </li>
          <li className="list-item">
            <input type="radio" id="two-above" />
            <label for="#two-above"> 2 starts & above</label>
          </li>
          <li className="list-item">
            <input type="radio" id="one-above" />
            <label for="#one-above">1 starts & above</label>
          </li>
        </ul>
      </div>
      <div className="sort-container">
        <h3>Sort</h3>
        <ul className="list-items">
          <li className="list-item">
            <input type="radio" id="low-high" />
            <label for="#low-high">Price: Low to High</label>
          </li>
          <li className="list-item">
            <input type="radio" id="high-low" />
            <label for="#high-low"> Price: High to Low</label>
          </li>
        </ul>
      </div>
    </div>
  </aside>
  </div>
  )
}

export default Filters