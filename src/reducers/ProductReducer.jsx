const API_LOADING = "api_loading";
const API_ERROR = "api_error";
const API_DATA = "api_data";
const SINGLE_DATA_LOADING = "single_data_loading";
const SINGLE_DATA_ERROR = "single_data_error";
const SINGLE_DATA = "single_data";
const SEARCHED_DATA = "searched_data";
const SEARCH_TERM = "search_term";
const FILTER_TERM = "filter_term";
const ITEMS = "items";

function ProductReducer(state, action) {
  switch (action.type) {
    case API_LOADING:
      return { ...state, isLoading: true };
    case API_ERROR:
      return { ...state, isLoading: false, isError: true };
    case API_DATA:
      return { ...state, isLoading: false, Products: action.payload };
    case SINGLE_DATA_LOADING:
      return { ...state, singleProductLoading: true };
    case SINGLE_DATA_ERROR:
      return {
        ...state,
        singleProductLoading: false,
        singleProductError: true,
      };
    case SINGLE_DATA:
      return {
        ...state,
        singleProductLoading: false,
        singleProduct: action.payload,
      };
    case SEARCHED_DATA:
      return {
        ...state,
        searchedProducts: action.payload,
      };
    case SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case FILTER_TERM:
      return {
        ...state,
        filterTerm: action.payload,
      };
    case ITEMS: {
      return {
        ...state,
        items: state.items + 1,
        cartItems: [...state.cartItems, action.payload],
      };
    }
  }
}

export default ProductReducer;
