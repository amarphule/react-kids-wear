import React, { createContext, useContext, useReducer } from "react";
const FilterContext = createContext();

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "RANGE":
      return { ...state, range: action.payload };
    case "CATEGORY":
      return {
        ...state,
        category: state.category.includes(action.payload)
          ? state.category.filter((i) => i !== action.payload)
          : [...state.category, action.payload],
      };
    case "RATING":
      return { ...state, rating: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "CLEAR":
      return {
        category: [],
        rating: null,
        price: null,
        sort: null,
        range: null,
      };
    default:
      return state;
  }
};
const initialValue = {
  category: [],
  rating: null,
  price: null,
  sort: null,
  range: null,
};
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialValue);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
