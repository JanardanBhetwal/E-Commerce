import ProductHook from "../hooks/ProductHook";
import { useState, useEffect } from "react";

function SearchBar() {
  const { searchItems } = ProductHook();
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    searchItems(search);
  };

  useEffect(() => {
    searchItems(search);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchItems(search);
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
    </div>
  );
}

export default SearchBar;
