import ProductHook from "../hooks/ProductHook";

function Sidebar() {
  const { filterTerm, filterItems } = ProductHook();
  let classname = " p-2 w-full text-left ";

  const handleClick = (category) => {
    filterItems(category);
  };

  const getColor = (category) => {
    return category === filterTerm
      ? `${classname} border-b-2 border-blue-500`
      : classname;
  };

  return (
    <div className=" text-black  h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Category</h2>
      <ul>
        <li className="mb-2">
          <button
            className={getColor("All")}
            onClick={() => {
              handleClick("All");
            }}
          >
            All
          </button>
        </li>
        <li className="mb-2">
          <button
            className={getColor("mobile")}
            onClick={() => {
              handleClick("mobile");
            }}
          >
            Mobile
          </button>
        </li>
        <li className="mb-2">
          <button
            className={getColor("laptop")}
            onClick={() => {
              handleClick("laptop");
            }}
          >
            Laptop
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
