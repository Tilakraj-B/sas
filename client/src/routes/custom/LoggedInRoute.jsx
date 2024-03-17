import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectUser } from "../../state/slices/auth";

const LoggedInRoute = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

export default LoggedInRoute;
