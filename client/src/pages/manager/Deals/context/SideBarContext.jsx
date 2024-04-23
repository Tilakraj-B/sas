import React, { createContext, useContext, useState } from "react";
import {
  useCreateDealMutation,
  useDeleteDealMutation,
} from "../../../../state/api/deals";
import { useGetItemsQuery } from "../../../../state/api/items";
const SideBarContext = createContext();

export const useSideBar = () => useContext(SideBarContext);

const SideBarProvider = ({ children }) => {
  const [isAddingNewDeal, setIsAddingNewDeal] = useState(true);
  const [createDeal] = useCreateDealMutation();
  const [deleteDeal] = useDeleteDealMutation();
  const [viewDeal, setViewDeal] = useState(false);
  const [selectedDealId, setSelectedDealId] = useState(null);

  const { data: { items = [] } = {} } = useGetItemsQuery();

  const addNewDeal = () => {
    setViewDeal(false);
    setIsAddingNewDeal(true);
  };

  const viewDealDetails = (dealId) => {
    setIsAddingNewDeal(false);
    setSelectedDealId(dealId);
    setViewDeal(true);
    setNewDeal({
      applicableItems: [],
      type: "fixed",
      value: null,
      name: "",
    });
  };

  const [newDeal, setNewDeal] = useState({
    applicableItems: [],
    type: "fixed",
    value: null,
    name: "",
  });

  const [applicableItemsList, setApplicableItemsList] = useState([]);

  const addApplicableItem = (e) => {
    console.log(e);
    const item = items.find((item) => item.name === e.target.value);
    console.log(item);
    var applicableItemsId = newDeal.applicableItems;
    if (applicableItemsId.find((id) => id === item._id)) {
      e.target.value = "";
      return;
    }
    applicableItemsId.push(item._id);
    setNewDeal((deal) => ({
      ...deal,
      applicableItems: applicableItemsId,
    }));
    e.target.value = "";
    console.log(newDeal);
    setApplicableItemsList((prev) => [...prev, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newDealData = {
      name: formData.get("name") || "",
      applicableItems: newDeal.applicableItems,
      value: formData.get("value") || 0,
      type: formData.get("type") || "fixed",
    };
    createDeal(newDealData);
    e.target.reset();
  };

  const removeFromApplicableItem = (itemId) => {
    setNewDeal((deal) => ({
      ...deal,
      applicableItems: newDeal.applicableItems.filter((id) => id !== itemId),
    }));
    setApplicableItemsList((prev) =>
      prev.filter((item) => item._id !== itemId)
    );
  };

  const handleDelete = (dealId) => {
    console.log(dealId);
    deleteDeal(dealId);
  };

  const value = {
    isAddingNewDeal,
    viewDeal,
    newDeal,
    applicableItemsList,
    selectedDealId,
    addNewDeal,
    viewDealDetails,
    handleSubmit,
    handleDelete,
    addApplicableItem,
    removeFromApplicableItem,
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};

export default SideBarProvider;
