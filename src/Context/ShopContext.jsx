import React, { createContext } from "react";
import { AllProduct } from "../Assets/dummyData";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = AllProduct;
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
