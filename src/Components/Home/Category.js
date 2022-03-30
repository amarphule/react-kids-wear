import React, { useState } from "react";
import { categories } from "../../backend/db/categories";

const Category = () => {
  console.log(categories);
  const [catagoryItems, setCatagoryItems] = useState(categories);
  return (
    <div>
      <div className="container feature">
        <h2 className="text-center">Feature categories</h2>
        <section className="d-flex justify-content-space-between">
          {catagoryItems &&
            catagoryItems.map((item) => (
              <div className="card card-vertical card-overlay">
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

          {/* <div className="card card-vertical card-overlay">
            <img className="img-thumbnail" src="./asset/girl.jpg" alt="Shirt" />
            <div className="card-details-overlay py-1">
              <div className="title-overlay">Girl</div>
            </div>
          </div> */}
          {/* <div className="card card-vertical card-overlay">
            <img className="img-thumbnail" src="./asset/boy.jpg" alt="Shirt" />
            <div className="card-details-overlay py-1">
              <div className="title-overlay">Boy</div>
            </div>
          </div>
          <div className="card card-vertical card-overlay">
            <img className="img-thumbnail" src="./asset/girl.jpg" alt="Shirt" />
            <div className="card-details-overlay py-1">
              <div className="title-overlay">Girl</div>
            </div>
          </div>
          <div className="card card-vertical card-overlay">
            <img className="img-thumbnail" src="./asset/boy.jpg" alt="Shirt" />
            <div className="card-details-overlay py-1">
              <div className="title-overlay">Boy</div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Category;
