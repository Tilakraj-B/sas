import React, { createContext, useContext, useState } from "react";
import { useGetItemsQuery } from "../../../state/api/items";

import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiDress, PiBooks } from "react-icons/pi";
import { TbGardenCart } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineSmartToy, MdOutlineSportsBasketball } from "react-icons/md";
import { CgGirl } from "react-icons/cg";

const ItemsContext = createContext();

export const useItems = () => useContext(ItemsContext);

const allItems = [
  {
    name: "iPhone 9",
    pricePerItem: 549,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    quantity: 94,
  },
  {
    name: "iPhone X",
    pricePerItem: 899,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/2/1.jpg",
    quantity: 34,
  },
  {
    name: "Samsung Universe 9",
    pricePerItem: 1249,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/3/1.jpg",
    quantity: 36,
  },
  {
    name: "OPPOF19",
    pricePerItem: 280,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/4/1.jpg",
    quantity: 123,
  },
  {
    name: "Huawei P30",
    pricePerItem: 499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/5/1.jpg",
    quantity: 32,
  },
  {
    name: "MacBook Pro",
    pricePerItem: 1749,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/6/1.png",
    quantity: 83,
  },
  {
    name: "Samsung Galaxy Book",
    pricePerItem: 1499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/7/1.jpg",
    quantity: 50,
  },
  {
    name: "Microsoft Surface Laptop 4",
    pricePerItem: 1499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/8/1.jpg",
    quantity: 68,
  },
  {
    name: "Infinix INBOOK",
    pricePerItem: 1099,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/9/1.jpg",
    quantity: 96,
  },
  {
    name: "HP Pavilion 15-DK1056WM",
    pricePerItem: 1099,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/10/1.jpeg",
    quantity: 89,
  },
  {
    name: "perfume Oil",
    pricePerItem: 13,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/11/1.jpg",
    quantity: 65,
  },
  {
    name: "Brown Perfume",
    pricePerItem: 40,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/12/1.jpg",
    quantity: 52,
  },
  {
    name: "Fog Scent Xpressio Perfume",
    pricePerItem: 13,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/13/1.webp",
    quantity: 61,
  },
  {
    name: "Non-Alcoholic Concentrated Perfume Oil",
    pricePerItem: 120,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/14/1.jpg",
    quantity: 114,
  },
  {
    name: "Eau De Perfume Spray",
    pricePerItem: 30,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/15/1.jpg",
    quantity: 105,
  },
  {
    name: "Hyaluronic Acid Serum",
    pricePerItem: 19,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/16/1.jpg",
    quantity: 110,
  },
  {
    name: "Tree Oil 30ml",
    pricePerItem: 12,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/17/1.jpg",
    quantity: 78,
  },
  {
    name: "Oil Free Moisturizer 100ml",
    pricePerItem: 40,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/18/1.jpg",
    quantity: 88,
  },
  {
    name: "Skin Beauty Serum.",
    pricePerItem: 46,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/19/1.jpg",
    quantity: 54,
  },
  {
    name: "Freckle Treatment Cream- 15gm",
    pricePerItem: 70,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/20/1.jpg",
    quantity: 140,
  },
  {
    name: "- Daal Masoor 500 grams",
    pricePerItem: 20,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/21/1.png",
    quantity: 133,
  },
  {
    name: "Elbow Macaroni - 400 gm",
    pricePerItem: 14,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/22/1.jpg",
    quantity: 146,
  },
  {
    name: "Orange Essence Food Flavou",
    pricePerItem: 14,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/23/1.jpg",
    quantity: 26,
  },
  {
    name: "cereals muesli fruit nuts",
    pricePerItem: 46,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/24/1.jpg",
    quantity: 113,
  },
  {
    name: "Gulab Powder 50 Gram",
    pricePerItem: 70,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/25/1.jpg",
    quantity: 47,
  },
];

const ItemsProvider = ({ children }) => {
  const { items = allItems } = useGetItemsQuery();
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
    items: items.filter((item) => item.category === selectedCategory),
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
