import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Contexts/ProductContext";
import { FilterProvider } from "./Contexts/FilterContext";
import AuthProvider from "./Contexts/AuthContext";
import WishListProvoder from "./Contexts/WishListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <FilterProvider>
          <ProductProvider>
            <WishListProvoder>
              <App />
            </WishListProvoder>
          </ProductProvider>
        </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
