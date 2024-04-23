import React, { createContext, useContext, useState } from "react";
import { useGetItemsQuery } from "../../../../state/api/items";

const SalesContext = createContext();

export const useSales = () => useContext(SalesContext);

const SalesProvider = ({ children }) => {
  const { data: { items = [] } = {} } = useGetItemsQuery();
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (itemId) => {
    if (!itemId) return setSelectedItem(null);
    setSelectedItem(items.find((item) => item._id === itemId));
  };

  const value = {
    items,
    selectedItemId: selectedItem?._id,
    selectItem,
  };

  return (
    <SalesContext.Provider value={value}>{children}</SalesContext.Provider>
  );
};

export default SalesProvider;
