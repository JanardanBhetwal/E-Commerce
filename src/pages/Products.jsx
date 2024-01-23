import ProductHook from "../hooks/ProductHook";

function Products() {
  const { name } = ProductHook();
  console.log(name);

  return <div>Products</div>;
}

export default Products;
