import ProductHook from "../hooks/ProductHook";
import ShowProduct from "../components/ShowProduct";

function Products() {
  const { ...state } = ProductHook();
  const datas = state.Products;
  const renderedProducts = datas.map((data) => {
    // console.log(data);
    return <ShowProduct key={data.id} data={data} />;
  });

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {renderedProducts}
    </div>
  );
}

export default Products;
