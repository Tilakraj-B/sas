import React from "react";
import { Routes, Route } from "react-router-dom";
import LoggedInRoute from "./custom/LoggedInRoute";

const ClerkRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoggedInRoute />}>
        {/* Add routes here */}
      </Route>
    </Routes>
  );
};

export default ClerkRoutes;
