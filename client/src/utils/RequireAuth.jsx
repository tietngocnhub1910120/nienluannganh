import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const auth = useSelector((state) => state.auth);

  return auth.token ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default RequireAuth;
