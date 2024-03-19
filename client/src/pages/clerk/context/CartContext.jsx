import React, { createContext, useContext, useState } from "react";
import { useGetDealsQuery } from "../../../state/api/deals";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const fakeDeals = [
  {
    _id: "1",
    name: "Buy 1 get 1 free",
    applicableItems: ["1", "2"],
    type: "fixed",
    value: 100,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: "2",
    name: "10% off on 2 items",
    applicableItems: ["1", "2"],
    type: "percentage",
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: "3",
    name: "5% off on 1 item",
    applicableItems: ["3"],
    type: "percentage",
    value: 5,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
  {
    _id: "4",
    name: "20% off on 3 items",
    applicableItems: ["1", "2", "3"],
    type: "percentage",
    value: 20,
    startTimestamp: new Date(),
    endTimestamp: new Date(),
  },
];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { deals } = useGetDealsQuery();

  const addToCart = (item) => {
    console.log("adding to cart", item);
    const itemInCart = cart.find((i) => i._id === item._id);
    if (itemInCart) {
      itemInCart.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    console.log("increasing quantity", item);
    const itemInCart = cart.find((i) => i._id === item._id);
    if (itemInCart) {
      itemInCart.quantity++;
      setCart([...cart]);
    }
  };

  const decreaseQuantity = (item) => {
    console.log("decreasing quantity", item);
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
    console.log("removing from cart", item);
    setCart(cart.filter((i) => i._id !== item._id));
  };

  const getApplicableDeals = () => {
    const itemIds = cart.map((i) => i._id);
    return deals?.filter((deal) =>
      deal.applicableItems.every((item) => itemIds.includes(item))
    );
  };

  const value = {
    items: cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,

    deals: getApplicableDeals() || fakeDeals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
