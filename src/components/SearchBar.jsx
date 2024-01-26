import ProductHook from "../hooks/ProductHook";
import ShowProduct from "./ShowProduct";
import { useState } from "react";

function SearchBar() {
  const { searchItems, searchedProducts } = ProductHook();
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await searchItems(search);
    const datas = searchedProducts;
    productShow(datas);
    setSearch("");
  };
  let renderedProducts;
  const productShow = (datas) => {
    renderedProducts = datas.map((data) => {
      return <ShowProduct key={data.id} data={data} />;
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-16 w-full"
      >
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:border-black"
          placeholder="Search..."
          onChange={handleInputChange}
          value={search}
        />
      </form>
      {renderedProducts}
    </div>
  );
}

export default SearchBar;
