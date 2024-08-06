import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading)
    return <span className="loading loading-spinner loading-lg my-20"></span>;

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
