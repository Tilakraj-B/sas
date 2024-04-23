import React from "react";
import { Routes, Route } from "react-router-dom";
import ManagerRoute from "./custom/ManagerRoute";
import Users from "../pages/manager/Users/Users";
import Inventory from "../pages/manager/Inventory/Inventory";
import Deals from "../pages/manager/Deals/Deals";
import Layout from "../components/Layout/Layout";
import Sales from "../pages/manager/Sales";

const ManagerRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<ManagerRoute />}>
          <Route path="/users" element={<Users />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/sales" element={<Sales />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default ManagerRoutes;
