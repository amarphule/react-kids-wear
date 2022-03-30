import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
  return (
 <div>
      <main className="container">
    <div className="card-login card-shadow">
      <h2 className="text-center">Login</h2>
      <div className="input-group">
        <label className="label" for="email">Email Address: </label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          placeholder="amardeepphule@gmail.com"
        />
      </div>
      <div className="input-group">
        <label className="label" for="password">Password : </label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          placeholder="**********"
        />
      </div>
      <div className="input-group d-flex">
        <div className="showPass">
          <button><i className="fas fa-eye"></i>Show</button>
        </div>
        <div className="hidePass">
          <button><i className="fas fa-eye-slash"></i>Hide</button>
        </div>
      </div>
      <div className="input-group">
        <input type="checkbox" name="remember" id="remember" />
        <label for="remember">Remember me</label>
        <Link to="#" className="link-forgot btn btn-link">Forgot your password?</Link>
      </div>
      <div className="input-group">
        <button className="form-control btn btn-cta">Login</button>
      </div>
      <div className="input-group">
        <p className="text-center">
          <Link className="d-flex-center" to="/signup"
            >Create New Account
            <span className="create-link"
              ><i className="fas fa-greater-than"></i></span
          ></Link>
        </p>
      </div>
    </div>
  </main>
 </div>
  )
}

export default Login