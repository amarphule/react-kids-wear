import React, { useState } from "react";
import { categories } from "../../backend/db/categories";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [catagoryItems, setCatagoryItems] = useState(categories);
  const navigate = useNavigate();
  return (
    <div>
      <div className="container feature">
        <h2 className="text-center">Feature categories</h2>
        <section className="d-flex justify-content-space-between">
          {catagoryItems &&
            catagoryItems.map((item) => (
              <div
                key={item._id}
                className="card card-vertical card-overlay"
                onClick={() => navigate("/product-lists")}
              >
                <img
                  className="img-thumbnail"
                  src={item.image}
                  alt={item.categoryName}
                />
                <div className="card-details-overlay py-1">
                  <div className="title-overlay">{item.categoryName}</div>
                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default Category;
