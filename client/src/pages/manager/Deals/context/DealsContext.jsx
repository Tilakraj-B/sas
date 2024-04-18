import { createContext, useContext } from "react";
import { useGetDealsQuery } from "../../../../state/api/deals";
import { useGetItemsQuery } from "../../../../state/api/items";

const DealsContext = createContext();

export const useDeals = () => useContext(DealsContext);

const DealsProvider = ({ children }) => {
  const { data: { deals = [] } = {} } = useGetDealsQuery();
  const { data: { items = [] } = {} } = useGetItemsQuery();

  const value = {
    deals: deals,
    items: items,
  };

  return (
    <DealsContext.Provider value={value}>{children}</DealsContext.Provider>
  );
};

export default DealsProvider;
