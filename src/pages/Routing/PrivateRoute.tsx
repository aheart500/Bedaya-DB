import * as React from "react";
import { Navigate, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  isLoggedIn: boolean;
  element: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { isLoggedIn, element: Element } = props;

  return isLoggedIn ? Element : <Navigate to="/login" />;
};

export default PrivateRoute;
