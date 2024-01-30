import { useContext } from "react";
import GlobalContext from "../context/ProductContext";

function ProductHook() {
  return useContext(GlobalContext);
}

export default ProductHook;
