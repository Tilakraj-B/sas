import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

const SidebarProvider = ({ children }) => {
  const value = {};

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export default SidebarProvider;
