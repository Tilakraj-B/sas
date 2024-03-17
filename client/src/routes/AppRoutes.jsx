import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import NotFound from "../pages/errors/NotFound";
import ClerkRoutes from "./ClerkRoutes";
import ManagerRoutes from "./ManagerRoutes";
import Unauthorized from "../pages/errors/Unauthorized";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/clerk/*" element={<ClerkRoutes />} />
        <Route path="/manager/*" element={<ManagerRoutes />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
