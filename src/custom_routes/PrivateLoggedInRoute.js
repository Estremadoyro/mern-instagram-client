import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { useUserAuth } from "../contexts/UserContext";

export default function PrivateLoggedInRoute({
  component: Component,
  ...rest
}) {
  // const { authState } = useUserAuth();
  const current_user = localStorage.getItem("user");

  return (
    <Route
      {...rest}
      render={(props) => {
        return current_user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
