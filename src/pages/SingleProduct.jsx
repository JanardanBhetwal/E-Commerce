import ProductHook from "../hooks/ProductHook";

function SingleProduct() {
  const { ...state } = ProductHook();
  return <div>SingleProduct</div>;
}

export default SingleProduct;
