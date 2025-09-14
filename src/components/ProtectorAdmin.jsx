import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({ usuarioAdmin }) => {
  if (!usuarioAdmin.token) {
    return <Navigate to={"/"}></Navigate>;
  }
   return <Outlet></Outlet>;
};

export default ProtectorAdmin;