import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "./context/Context";

const ProtectedRoute = () => {
  let auth = { user: useContext(Context) };
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
