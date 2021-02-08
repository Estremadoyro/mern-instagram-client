import React, { useReducer, useContext, useEffect } from "react";
import {
  reducer,
  initialState,
  AUTH_STATE_CHANGED,
  LOGOUT,
} from "../reducers/UserReducer";

export const UserContext = React.createContext();

export const useUserAuth = () => {
  return useContext(UserContext);
};

export const UserContextProvider = (props) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const actions = {
    authStateChanged: (user) => {
      if (user) {
        dispatch({ type: AUTH_STATE_CHANGED, payload: user });
      }
    },
    userLogOut: () => {
      dispatch({ type: LOGOUT, payload: null });
    },
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return actions.authStateChanged(user);
  }, []);

  const values = {
    authState: authState,
    authActions: actions,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};
