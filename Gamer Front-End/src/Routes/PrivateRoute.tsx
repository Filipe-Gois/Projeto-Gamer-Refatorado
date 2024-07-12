import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
  redirectTo: string;
};

const PrivateRoute = ({ children, redirectTo = "/" }: PrivateRouteProps) =>
  localStorage.getItem("token") ? children : <Navigate to={redirectTo} />;

export default PrivateRoute;
