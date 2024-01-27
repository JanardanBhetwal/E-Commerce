import ProductHook from "../hooks/ProductHook";
import { Link } from "react-router-dom";
import ShowProduct from "../components/ShowProduct";

function Cart() {
  const { items, cartItems, Products } = ProductHook();
  console.log(cartItems);

  if (items != 0) {
    const totalCartItems = Products.filter((product) =>
      cartItems.includes(product.id)
    );

    const renderedItems = totalCartItems.map((data) => {
      return <ShowProduct key={data.id} data={data} />;
    });

    return <div>{renderedItems}</div>;
  }

  return (
    <div className="flex flex-col p-8 mx-auto my-8">
      <span className="text-center text-5xl font-bold m-8">
        Nothing in cart!
      </span>
      <button className="bg-purple-500 p-2 rounded-md text-white w-32 mx-auto">
        <Link to="/products">Shop Now</Link>
      </button>
    </div>
  );
}

export default Cart;
