import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cart.find((i) => i._id === item._id);
    if (itemInCart) {
      itemInCart.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    const itemInCart = cart.find((i) => i._id === item._id);
    if (itemInCart) {
      itemInCart.quantity++;
      setCart([...cart]);
    }
  };

  const decreaseQuantity = (item) => {
    const itemInCart = cart.find((i) => i._id === item._id);
    if (itemInCart) {
      itemInCart.quantity--;
      if (itemInCart.quantity === 0) {
        setCart(cart.filter((i) => i._id !== item._id));
      } else {
        setCart([...cart]);
      }
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i._id !== item._id));
  };

  const value = {
    items: cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
