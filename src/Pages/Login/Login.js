import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginHandler } = useAuth();

  const logoutHandler = (e) => {
    e.preventDefault();
    loginHandler(user.email, user.password);
  };
  return (
    <div>
      <main className="container">
        <form
          onSubmit={(e) => {
            logoutHandler(e);
          }}
          className="card-login card-shadow"
        >
          <h2 className="text-center">Login</h2>
          <div className="input-group">
            <label className="label" htmlFor="email">
              Email Address:
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="amardeepphule@gmail.com"
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="password">
              Password :
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="**********"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="input-group d-flex">
            <div className="showPass">
              <button>
                <i className="fas fa-eye"></i>Show
              </button>
            </div>
            <div className="hidePass">
              <button>
                <i className="fas fa-eye-slash"></i>Hide
              </button>
            </div>
          </div>
          <div className="input-group">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
            <Link to="#" className="link-forgot btn btn-link">
              Forgot your password?
            </Link>
          </div>
          <div className="input-group">
            <button type="submit" className="form-control btn btn-cta">
              Login
            </button>
          </div>
          <div className="input-group">
            <p className="text-center">
              <Link className="d-flex-center" to="/signup">
                Create New Account
                <span className="create-link">
                  <i className="fas fa-greater-than"></i>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
