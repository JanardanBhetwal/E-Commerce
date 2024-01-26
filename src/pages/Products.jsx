import ProductHook from "../hooks/ProductHook";
import ShowProduct from "../components/ShowProduct";
import SearchBar from "../components/SearchBar";

function Products() {
  const { searchTerm, Products, isLoading } = ProductHook();

  let totalProducts = Products;
  if (!isLoading) {
    if (!searchTerm) {
      totalProducts = Products;
    } else {
      totalProducts = Products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }

  const renderedProducts = totalProducts.map((data) => {
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
