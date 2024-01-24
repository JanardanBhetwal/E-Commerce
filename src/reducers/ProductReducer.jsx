const API_LOADING = "api_loading";
const API_ERROR = "api_error";
const API_DATA = "api_data";

function ProductReducer(state, action) {
  switch (action.type) {
    case API_LOADING:
      return { ...state, isLoading: false };
    case API_ERROR:
      return { ...state, isLoading: false, isError: true };
    case API_DATA:
      return { ...state, Products: action.payload };
  }
}

export default ProductReducer;
