import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  return user ? props.children : <Navigate to="/" />;
};

export default ProtectedRoute;
