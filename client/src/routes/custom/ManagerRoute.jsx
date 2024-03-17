import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectRole, selectUser } from "../../state/slices/auth";

const ManagerRoute = () => {
  const user = useSelector(selectUser);
  const role = useSelector(selectRole);

  if (!user) {
    return (
      <Navigate to="/auth/login" state={{ from: window.location.pathname }} />
    );
  }

  if (role !== "manager") {
    return (
      <Navigate
        to="/unauthorized"
        state={{ message: "You are not authorized to access this page" }}
      />
    );
  }

  return <Outlet />;
};

export default ManagerRoute;
