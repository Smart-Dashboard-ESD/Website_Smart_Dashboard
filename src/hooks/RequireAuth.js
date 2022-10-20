import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth.token) {
    return (
      <Navigate
        to={{ pathname: "/login", state: { from: location.pathname } }}
      />
    );
  }

  return <Outlet />;
};

export default RequireAuth;
