import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetItemsQuery } from "../../../state/api/items";

import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiDress, PiBooks } from "react-icons/pi";
import { TbGardenCart } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineSmartToy, MdOutlineSportsBasketball } from "react-icons/md";
import { CgGirl } from "react-icons/cg";

const ItemsContext = createContext();

export const useItems = () => useContext(ItemsContext);

const ItemsProvider = ({ children }) => {
  const { data: { items = [] } = {} } = useGetItemsQuery();
  const categories = [
    {
      label: "Electronics",
      icon: <HiOutlineDevicePhoneMobile />,
    },
    {
      label: "Clothing",
      icon: <PiDress />,
    },
    {
      label: "Home & Garden",
      icon: <TbGardenCart />,
    },
    {
      label: "Automotive",
      icon: <IoCarSportOutline />,
    },
    {
      label: "Toys & Games",
      icon: <MdOutlineSmartToy />,
    },
    {
      label: "Books",
      icon: <PiBooks />,
    },
    {
      label: "Sports & Outdoors",
      icon: <MdOutlineSportsBasketball />,
    },
    {
      label: "Beauty & Personal Care",
      icon: <CgGirl />,
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0].label);

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  const value = {
    items: items?.filter((item) => item.category === selectedCategory),
    categories: categories.map((category) => ({
      ...category,
      active: category.label === selectedCategory,
    })),
    changeCategory,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export default ItemsProvider;
