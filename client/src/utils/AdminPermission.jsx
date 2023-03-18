import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  const user = useSelector((state) => state.auth.user);

  return user.admin ? <Outlet /> : <Navigate to={"/unauthorized"} />;
};

export default AdminRoutes;
