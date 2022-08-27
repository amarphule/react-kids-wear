import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container banner img-fluid btn-center">
        <button
          onClick={() => navigate("/product-lists")}
          className="btn btn-cta"
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Banner;
