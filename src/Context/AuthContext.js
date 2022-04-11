import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let navigate = useNavigate();

  const tokenAvailable = localStorage.getItem("token") ? true : false;

  const [isLoggedIn, setIsLoggedIn] = useState(tokenAvailable);

  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(`/product-lists`);
    } catch (error) {
      console.error(error);
    }
  };

  const signupHandler = async ({
    firstName,
    lastName,
    email,
    password,
    confPassword,
  }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(`/product-lists`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ loginHandler, isLoggedIn, setIsLoggedIn, signupHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
