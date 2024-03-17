import React, { useContext, createContext } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdOutlineStorefront } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiCoupon3Line } from "react-icons/ri";

import { selectRole } from "../../state/slices/auth";

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

const SidebarProvider = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const role = useSelector(selectRole);
  const sidebarItems = [
    {
      label: "Home",
      path: "/clerk/home",
      icon: <MdOutlineStorefront />,
      active: pathname === "/clerk/home",
      show: true,
    },
    {
      label: "Users",
      path: "/manager/users",
      icon: <FiUsers />,
      active: pathname === "/manager/users",
      show: role === "manager",
    },
    {
      label: "Inventory",
      path: "/manager/inventory",
      icon: <BsBoxes />,
      active: pathname === "/manager/inventory",
      show: role === "manager",
    },
    {
      label: "Deals",
      path: "/manager/deals",
      icon: <RiCoupon3Line />,
      active: pathname === "/manager/deals",
      show: role === "manager",
    },
  ];

  const value = {
    items: sidebarItems,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export default SidebarProvider;
