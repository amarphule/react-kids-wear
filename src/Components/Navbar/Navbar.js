import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
    <header className="header">
    <div className="header-logo">
      <Link to="/">Kids Wear</Link>
    </div>
    <form className="search">
      <span className="search-icon"><i className="fas fa-search fa-sm"></i></span>
      <input type="text" placeholder="What are you looking for?" />
    </form>
    <div>
      <ul className="header-links">
        <li className="header-link">
          <Link to="/login" className="btn btn-cta">Login</Link>
        </li>
        <li className="header-link">
          <Link to="/wishlist">
            <div className="badge-wrapper">
              <i className="far fa-heart"></i>
              <span className="badge badge-icon-val">1</span>
            </div>
          </Link>
        </li>
        <li className="header-link">
          <Link to="/cart">
            <div className="badge-wrapper">
              <i className="fas fa-shopping-bag"></i>
              <span className="badge badge-icon-val">3</span>
            </div>
          </Link>
        </li>
        {/* <li className="header-link">
          <Link to="/">
            <i className="fas fa-sign-out-alt"></i>
          </Link>
        </li> */}
      </ul>
    </div>
  </header></div>
  )
}

export default Navbar