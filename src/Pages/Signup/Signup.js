import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const Signup = () => {
  const [addUser, setAddUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const { signupHandler } = useAuth();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signupHandler(addUser);
        }}
        className="container"
      >
        <div className="card-login card-shadow">
          <h2 className="text-center">SignUp</h2>
          <div className="input-group">
            <label className="label" htmlFor="first-name">
              First Name:
            </label>
            <input
              className="form-control"
              type="text"
              onChange={(e) =>
                setAddUser({ ...addUser, firstName: e.target.value })
              }
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="last-name">
              Last Name:
            </label>
            <input
              className="form-control"
              type="text"
              onChange={(e) =>
                setAddUser({ ...addUser, lastName: e.target.value })
              }
              placeholder="Enter Last Name"
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="email">
              Email Address:
            </label>
            <input
              className="form-control"
              type="email"
              onChange={(e) =>
                setAddUser({ ...addUser, email: e.target.value })
              }
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
              onChange={(e) =>
                setAddUser({ ...addUser, password: e.target.value })
              }
              placeholder="**********"
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="password">
              Confirm Password :
            </label>
            <input
              className="form-control"
              type="password"
              onChange={(e) =>
                setAddUser({ ...addUser, confPassword: e.target.value })
              }
              placeholder="**********"
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
            <label htmlFor="remember">I accept all Terms & Conditions</label>
          </div>
          <div className="input-group">
            <button type="submit" className="form-control btn btn-cta">
              Create New Account
            </button>
          </div>
          <div className="input-group">
            <p className="text-center">
              <Link className="d-flex-center" to="/login">
                Already Have an Account
                <span className="create-link">
                  <i className="fas fa-greater-than"></i>
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
