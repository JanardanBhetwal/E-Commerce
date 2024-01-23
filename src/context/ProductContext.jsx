import { createContext } from "react";

const ProductContext = createContext();

function Provider({ children }) {
  const name = "JB";
  const valueToShare = { name };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
export { Provider };
