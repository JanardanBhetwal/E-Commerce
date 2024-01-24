import { Link } from "react-router-dom";
function ShowProduct({ data }) {
  const id = data.id;
  const title = data.title;
  const price = data.price;
  const image_Link = data.image;
  const description = data.description;

  return (
    <Link
      to={`/singleproduct/:${id}`}
      className="max-w-96 rounded flex flex-col border shadow-lg p-4 m-4"
    >
      <img className="w-full h-96 object-cover" src={image_Link} alt={title} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </Link>
  );
}

export default ShowProduct;
