import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import { FilterProvider } from "./Context/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <Router>
          <App />
        </Router>
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
