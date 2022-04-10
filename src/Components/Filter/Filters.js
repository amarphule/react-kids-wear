import React from "react";
import { useFilter } from "../../Context/FilterContext";

const Filters = () => {
  const { state, dispatch } = useFilter();
  const { rating, category, sort } = state;
  const ratings = [4, 3, 2, 1];
  return (
    <div>
      <aside className="left-sidebar">
        <div className="sidebar-heading d-flex justify-content-space-between baseline">
          <h2>Filter</h2>
          <h3>
            <a
              onClick={() => dispatch({ type: "CLEAR" })}
              className="btn btn-link"
              href="#"
            >
              Clear
            </a>
          </h3>
        </div>
        <div className="sidebar-heading">
          <div className="slide-container">
            <h3>Price</h3>
            <p className="d-flex justify-content-space-between">
              <span className="price">100</span>
              <span className="price">{state.range}</span>
              <span className="price">5000</span>
            </p>
            <input
              type="range"
              onChange={(e) =>
                dispatch({ type: "RANGE", payload: e.target.value })
              }
              value={state.range}
              id="range"
              min="100"
              max="5000"
              step="100"
            />
          </div>
          <div className="category-container">
            <h3>Category</h3>
            <ul className="list-items">
              <li className="list-item">
                <input
                  type="checkbox"
                  id="boy"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "boy" })
                  }
                  checked={category.includes("boy")}
                />
                <label htmlFor="#boy">Boy clothing</label>
              </li>
              <li className="list-item">
                <input
                  type="checkbox"
                  id="girl"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "girl" })
                  }
                  checked={category.includes("girl")}
                />
                <label htmlFor="#girl">Girl clothing</label>
              </li>
            </ul>
          </div>
          <div className="rating-container">
            <h3>Rating</h3>
            <ul className="list-items">
              {ratings.map((item) => (
                <>
                  <li key={item} className="list-item">
                    <input
                      type="radio"
                      name={item}
                      onChange={() =>
                        dispatch({ type: "RATING", payload: item })
                      }
                      id={item}
                      checked={rating === item}
                    />
                    <label htmlFor="#four-above"> {item} starts & above</label>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div className="sort-container">
            <h3>Sort</h3>
            <ul className="list-items">
              <li className="list-item">
                <input
                  type="radio"
                  name="sort"
                  id="low-high"
                  checked={sort === "LOW_TO_HIGH"}
                  onChange={() =>
                    dispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })
                  }
                />
                <label htmlFor="#low-high">Price: Low to High</label>
              </li>
              <li className="list-item">
                <input
                  type="radio"
                  name="sort"
                  id="high-low"
                  checked={sort === "HIGH_TO_LOW"}
                  onChange={() =>
                    dispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })
                  }
                />
                <label htmlFor="#high-low"> Price: High to Low</label>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Filters;
