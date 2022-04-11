import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductLists } from "../../Context/ProductContext";

const NewArrival = () => {
  const navigate = useNavigate();

  const { productLists } = useProductLists();
  const newArrival = productLists.filter((prod) => prod.tag);
  return (
    <div className="container">
      <h2 className="text-center">New Arrival</h2>
      <div className="new-arrival d-flex justify-content-space-between">
        {newArrival &&
          newArrival.map((newItem) => (
            <div
              className="card-shadow card p-1 d-flex"
              onClick={() => navigate("/product-lists")}
              key={newItem._id}
            >
              <img className="img-row" src={newItem.image} alt="New arrivals" />
              <div className="card-details">
                <span className="card-badge">New Arrival</span>
                <div className="title">{newItem.title} </div>
                <div className="desc">
                  lorem Lorem ipsum dolor sit ametipsum dolor sit ametipsum
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewArrival;
