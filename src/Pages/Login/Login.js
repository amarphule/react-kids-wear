import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isVisible, setIsVisible] = useState(true);
  const { loginHandler } = useAuth();

  const logoutHandler = (e) => {
    e.preventDefault();
    loginHandler(user.email, user.password);
  };
  const isVisibleHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <main className="container">
        <form
          onSubmit={(e) => {
            logoutHandler(e);
          }}
          className="card-login card-shadow"
          autocomplete="off"
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
              value={user.email}
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
              type={isVisible ? "password" : "text"}
              id="password"
              placeholder="**********"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="input-group d-flex">
            {isVisible ? (
              <button onClick={isVisibleHandler}>
                <i className="fas fa-eye"></i>Show
              </button>
            ) : (
              <button onClick={isVisibleHandler}>
                <i className="fas fa-eye-slash"></i>Hide
              </button>
            )}
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
            <button
              type="submit"
              onClick={() =>
                setUser({
                  email: "adarshbalika@gmail.com",
                  password: "adarshbalika",
                })
              }
              className="form-control btn btn-cta"
            >
              Guest Login
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
