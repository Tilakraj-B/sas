import React from "react";
import { Routes, Route } from "react-router-dom";
import LoggedInRoute from "./custom/LoggedInRoute";
import Home from "../pages/clerk/Home";
import Layout from "../components/Layout/Layout";

const ClerkRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<LoggedInRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default ClerkRoutes;
