import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserAuth } from "../contexts/UserContext";

export default function PrivateLoggedInRoute({
  component: Component,
  ...rest
}) {
  const { authState } = useUserAuth();

  console.log(authState); 
  console.log(authState.user !== null);
  return (
    <Route
      {...rest}
      render={(props) => {
        return authState.user !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
