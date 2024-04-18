import React, { createContext, useContext, useState } from "react";
import {
  useCreateDealMutation,
  useDeleteDealMutation,
} from "../../../../state/api/deals";
import { useGetItemsQuery } from "../../../../state/api/items";
const SideBarContext = createContext();

export const useSideBar = () => useContext(SideBarContext);
const allItems = [
  {
    _id: "1",
    name: "iPhone 9",
    pricePerItem: 549,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    quantity: 94,
  },
  {
    _id: "2",
    name: "iPhone X",
    pricePerItem: 899,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/2/1.jpg",
    quantity: 34,
  },
  {
    _id: "3",
    name: "Samsung Universe 9",
    pricePerItem: 1249,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/3/1.jpg",
    quantity: 36,
  },
  {
    _id: "4",
    name: "OPPOF19",
    pricePerItem: 280,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/4/1.jpg",
    quantity: 123,
  },
  {
    _id: "5",
    name: "Huawei P30",
    pricePerItem: 499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/5/1.jpg",
    quantity: 32,
  },
  {
    _id: "6",
    name: "MacBook Pro",
    pricePerItem: 1749,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/6/1.png",
    quantity: 83,
  },
  {
    _id: "7",
    name: "Samsung Galaxy Book",
    pricePerItem: 1499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/7/1.jpg",
    quantity: 50,
  },
  {
    _id: "8",
    name: "Microsoft Surface Laptop 4",
    pricePerItem: 1499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/8/1.jpg",
    quantity: 68,
  },
  {
    _id: "9",
    name: "Infinix INBOOK",
    pricePerItem: 1099,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/9/1.jpg",
    quantity: 96,
  },
  {
    _id: "10",
    name: "HP Pavilion 15-DK1056WM",
    pricePerItem: 1099,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/10/1.jpeg",
    quantity: 89,
  },
  {
    _id: "11",
    name: "perfume Oil",
    pricePerItem: 13,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/11/1.jpg",
    quantity: 65,
  },
  {
    _id: "12",
    name: "Brown Perfume",
    pricePerItem: 40,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/12/1.jpg",
    quantity: 52,
  },
  {
    _id: "13",
    name: "Fog Scent Xpressio Perfume",
    pricePerItem: 13,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/13/1.webp",
    quantity: 61,
  },
  {
    _id: "14",
    name: "Non-Alcoholic Concentrated Perfume Oil",
    pricePerItem: 120,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/14/1.jpg",
    quantity: 114,
  },
  {
    _id: "15",
    name: "Eau De Perfume Spray",
    pricePerItem: 30,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/15/1.jpg",
    quantity: 105,
  },
  {
    _id: "16",
    name: "Hyaluronic Acid Serum",
    pricePerItem: 19,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/16/1.jpg",
    quantity: 110,
  },
  {
    _id: "17",
    name: "Tree Oil 30ml",
    pricePerItem: 12,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/17/1.jpg",
    quantity: 78,
  },
  {
    _id: "18",
    name: "Oil Free Moisturizer 100ml",
    pricePerItem: 40,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/18/1.jpg",
    quantity: 88,
  },
  {
    _id: "19",
    name: "Skin Beauty Serum.",
    pricePerItem: 46,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/19/1.jpg",
    quantity: 54,
  },
  {
    _id: "20",
    name: "Freckle Treatment Cream- 15gm",
    pricePerItem: 70,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/20/1.jpg",
    quantity: 140,
  },
  {
    _id: "21",
    name: "- Daal Masoor 500 grams",
    pricePerItem: 20,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/21/1.png",
    quantity: 133,
  },
  {
    _id: "22",
    name: "Elbow Macaroni - 400 gm",
    pricePerItem: 14,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/22/1.jpg",
    quantity: 146,
  },
  {
    _id: "23",
    name: "Orange Essence Food Flavou",
    pricePerItem: 14,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/23/1.jpg",
    quantity: 26,
  },
  {
    _id: "24",
    name: "cereals muesli fruit nuts",
    pricePerItem: 46,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/24/1.jpg",
    quantity: 113,
  },
  {
    _id: "25",
    name: "Gulab Powder 50 Gram",
    pricePerItem: 70,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/25/1.jpg",
    quantity: 47,
  },
];

const SideBarProvider = ({ children }) => {
  const [isAddingNewDeal, setIsAddingNewDeal] = useState(true);
  const [createDeal] = useCreateDealMutation();
  const [deleteDeal] = useDeleteDealMutation();
  const [viewDeal, setViewDeal] = useState(false);
  const [selectedDealId, setSelectedDealId] = useState(null);

  const { items = allItems } = useGetItemsQuery();

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
    const item = items.find((item) => item.name === e.target.value);
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
