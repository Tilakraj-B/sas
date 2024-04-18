import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import { useSelector } from "react-redux";
import { selectUser } from "../state/slices/auth";

const AuthRoutes = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  if (user) {
    return navigate("/", { replace: true });
  }

  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AuthRoutes;
