import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";

const URL = "https://fakestoreapi.com/products";
const API_LOADING = "api_loading";
const API_ERROR = "api_error";
const API_DATA = "api_data";

const ProductContext = createContext();

function Provider({ children }) {
  const initialState = {
    isLoading: true,
    isError: false,
    Products: [],
    featuredProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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

  useEffect(() => {
    getProducts();
  }, []);

  const valueToShare = { ...state };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
export { Provider };
