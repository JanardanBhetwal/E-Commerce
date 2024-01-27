import ProductHook from "../hooks/ProductHook";
import ShowProduct from "../components/ShowProduct";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";

function Products() {
  const { searchTerm, filterTerm, Products, isLoading } = ProductHook();

  let totalProducts = Products;
  if (!isLoading) {
  }

  const filterProductsByCategory = (category) => {
    return totalProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  };

  totalProducts = filterProductsByCategory(filterTerm);
  if (filterTerm === "All") {
    totalProducts = Products;
  }

  if (searchTerm) {
    totalProducts = Products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
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

      <div className="flex flex-row">
        <div className="mt-8 mx-8 w-1/7 ">
          <Sidebar />
        </div>
        <div className="mt-8 flex flex-row flex-wrap justify-center">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Products;
