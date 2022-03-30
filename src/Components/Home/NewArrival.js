import React from "react";

const NewArrival = ({ newArrival }) => {
  return (
    <div className="container">
      <h2 className="text-center">New Arrival</h2>
      <div className="new-arrival d-flex justify-content-space-between">
        {newArrival &&
          newArrival.map((newItem) => (
            <div className="card-shadow card p-1 d-flex">
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
