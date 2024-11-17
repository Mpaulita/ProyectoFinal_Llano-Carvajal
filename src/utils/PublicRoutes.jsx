import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PublicRoute() {
  const { loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return <Outlet />;
}

export default PublicRoute;
