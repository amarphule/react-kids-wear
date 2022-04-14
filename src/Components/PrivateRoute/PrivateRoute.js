import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
