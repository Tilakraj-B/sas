import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetDealsQuery } from "../../../state/api/deals";
import { useCreateTransactionMutation } from "../../../state/api/transactions";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { data: { deals = [] } = {} } = useGetDealsQuery();
  const [selectedDealId, setSelectedDealId] = useState(null);
  const [initiateTransaction, { data, isLoading, isError }] =
    useCreateTransactionMutation();

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

  const selectDeal = (dealId) => {
    console.log("selecting deal", dealId);
    setSelectedDealId(dealId);
  };

  const checkout = () => {
    const transactionData = {
      items: cart.map((item) => ({
        _id: item._id,
        quantity: item.quantity,
      })),
      deal: selectedDealId,
    };

    initiateTransaction(transactionData);
  };

  useEffect(() => {
    if (data) {
      console.log("transaction successful", data);
      setCart([]);
      setSelectedDealId(null);
    }
  }, [data]);

  const value = {
    items: cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,

    deals: getApplicableDeals(),

    selectedDealId,
    selectDeal,

    checkout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
