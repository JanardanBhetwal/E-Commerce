import ProductHook from "../hooks/ProductHook";
import ShowProduct from "../components/ShowProduct";
import SearchBar from "../components/SearchBar";

function Products() {
  const { Products, isLoading } = ProductHook();

  const renderedProducts = Products.map((data) => {
    return <ShowProduct key={data.id} data={data} />;
  });

  let content;
  content = <div>LOADING</div>;
  if (!isLoading) {
    content = renderedProducts;
  }

  return (
    <div>
      <SearchBar />
      <div className="flex flex-row flex-wrap justify-center">{content}</div>
    </div>
  );
}

export default Products;
