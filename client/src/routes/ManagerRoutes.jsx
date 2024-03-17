import React from "react";
import { Routes, Route } from "react-router-dom";
import ManagerRoute from "./custom/ManagerRoute";

const ManagerRoutes = () => {
  return (
    <Routes>
      <Route index element={<ManagerRoute />}>
        {/* Add routes here */}
      </Route>
    </Routes>
  );
};

export default ManagerRoutes;
