import ProductHook from "../hooks/ProductHook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const { getSingleProduct, singleProductLoading, singleProduct } =
    ProductHook();

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  let content;
  if (singleProductLoading) {
    content = <div>Loading</div>;
  } else {
    const imageShow = singleProduct.image.map((image) => {
      return (
        <div key={image.id} className="m-2 h-auto w-full">
          <img src={image.url} />
        </div>
      );
    });
    content = (
      <div className="flex flex-col justify-center items-center w-2/5 mx-auto border my-32 p-8">
        <div className="flex flex-row justify-between">{imageShow}</div>
        <div>
          <div className="text-center font-bold text-3xl m-2">
            {singleProduct.name}
          </div>
          <div className="font-bold text-xl m-2 p-2">
            Price:$
            <span className="">{singleProduct.price}</span>
          </div>
          <div className="m-2 p-2 text-justify">
            {singleProduct.description}
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default SingleProduct;
