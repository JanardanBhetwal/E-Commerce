import { useContext } from "react";
import GlobalContext from "../Context/ProductContext";

function ProductHook() {
  return useContext(GlobalContext);
}

export default ProductHook;
