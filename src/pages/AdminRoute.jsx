import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { isAdmin } = useAdmin();
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return <span className="loading loading-spinner loading-lg my-24"></span>;

  if (user && isAdmin) return children;

  return <Navigate to="/login" replace />;
};

export default AdminRoute;
