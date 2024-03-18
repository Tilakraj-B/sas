import React, { createContext, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const value = {};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
