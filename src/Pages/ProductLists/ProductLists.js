import React from "react";
import "./ProductLists.css";
import Product from "../../Components/Product";
import Filters from "../../Components/Filter/Filters";
import { useProductLists } from "../../Context/ProductContext";
import { useFilter } from "../../Context/FilterContext";

const ProductLists = () => {
  const { productLists } = useProductLists();
  const { state } = useFilter();

  const filterByRange = (products, price) => {
    return products.filter((prod) => Number(prod.price) < Number(price));
  };

  const filterByCategory = (products, category) => {
    if (category.length === 0) {
      return products;
    } else {
      return products.filter((prod) => category.includes(prod.categoryName));
    }
  };

  const filterByRating = (products, rating) => {
    if (rating) {
      return products.filter((prod) => prod.rating >= rating);
    }
    return products;
  };

  const filterSortByPrice = (products, sort) => {
    if (sort && sort == "LOW_TO_HIGH") {
      return products.sort((a, b) => a.price - b.price);
    }
    if (sort && sort == "HIGH_TO_LOW") {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  };

  // compose function
  const filteredProducts = (() => {
    return filterByRange(
      filterByCategory(
        filterByRating(
          filterSortByPrice([...productLists], state.sort),
          state.rating
        ),
        state.category
      ),
      state.range
    );
  })();

  return (
    <div className="main-container">
      {/* filter sidebar */}
      <Filters />
      {/* filter sidebar */}

      {/* Start products */}
      <section className="wrapper">
        <div className="grid">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      </section>
      {/* End products */}
    </div>
  );
};

export default ProductLists;
