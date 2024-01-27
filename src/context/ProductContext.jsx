import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";

const URL = "https://api.pujakaitem.com/api/products";
const API_LOADING = "api_loading";
const API_ERROR = "api_error";
const API_DATA = "api_data";
const SINGLE_DATA_LOADING = "single_data_loading";
const SINGLE_DATA_ERROR = "single_data_error";
const SINGLE_DATA = "single_data";
const SEARCH_TERM = "search_term";
const FILTER_TERM = "filter_term";

const ProductContext = createContext();

function Provider({ children }) {
  const initialState = {
    isLoading: true,
    isError: false,
    Products: [],
    featuredProducts: [],
    singleProductLoading: true,
    singleProductError: false,
    singleProduct: {},
    searchTerm: "",
    filterTerm: "All",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const isLoading = state.isLoading;
  const isError = state.isError;
  const Products = state.Products;
  const featuredProducts = state.featuredProducts;
  const singleProduct = state.singleProduct;
  const singleProductLoading = state.singleProductLoading;
  const singleProductError = state.singleProductError;
  const searchTerm = state.searchTerm;
  const filterTerm = state.filterTerm;

  const getProducts = async () => {
    dispatch({ type: API_LOADING });
    try {
      const response = await axios.get(URL);
      const data = response.data;
      dispatch({ type: API_DATA, payload: data });
    } catch (error) {
      dispatch({ type: API_ERROR, payload: error });
    }
  };

  const getSingleProduct = async (id) => {
    dispatch({ type: SINGLE_DATA_LOADING });
    try {
      const response = await axios.get(`${URL}/?id=${id}`);
      const data = response.data;
      dispatch({ type: SINGLE_DATA, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_DATA_ERROR, payload: error });
    }
  };

  const searchItems = (name) => {
    dispatch({ type: SEARCH_TERM, payload: name });
  };

  const filterItems = (category) => {
    dispatch({ type: FILTER_TERM, payload: category });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const valueToShare = {
    isLoading,
    isError,
    Products,
    featuredProducts,
    singleProduct,
    singleProductLoading,
    singleProductError,
    searchTerm,
    getSingleProduct,
    searchItems,
    filterItems,
    filterTerm,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
export { Provider };
