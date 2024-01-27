import { Link } from "react-router-dom";
import ProductHook from "../hooks/ProductHook";
import { useState, useEffect } from "react";

function ShowProduct({ data }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const id = data.id;
  const title = data.name;
  const price = data.price;
  const image_Link = data.image;
  const { handleAddtoCart, cartItems } = ProductHook();

  const checkButton = () => {
    const isInCart = cartItems.some((item) => item.id === id);
    setIsDisabled(isInCart);
  };

  useEffect(() => {
    checkButton();
  }, [cartItems]);

  function handleClick(id, e) {
    e.preventDefault();
    handleAddtoCart(id);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(true);
    }, 0);
  }

  return (
    <Link
      to={`/singleproduct/${id}`}
      className="max-w-60 rounded flex flex-col border shadow-lg p-4 m-2 "
    >
      <img
        className="w-full h-auto object-cover"
        src={image_Link}
        alt={title}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price}</p>
        <button
          disabled={isDisabled}
          onClick={(e) => {
            handleClick(id, e);
          }}
          className="bg-red-500 rounded-md text-white font-bold p-2 w-full mx-auto my-2"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default ShowProduct;
