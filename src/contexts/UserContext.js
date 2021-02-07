import React, { useReducer, useContext, useEffect } from "react";
import {
  reducer,
  initialState,
  AUTH_STATE_CHANGED,
} from "../reducers/UserReducer";

const UserContext = React.createContext();

export const useUserAuth = () => { 
  return useContext(UserContext);
}

export const UserContextProvider = (props) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const actions = {
    authStateChanged: (user) => {
      
      console.log(JSON.stringify(user))
      if (user) {
        dispatch({ type: AUTH_STATE_CHANGED, payload: user });
      }
    },
  };

  useEffect(() => { 
    const user = JSON.parse(localStorage.getItem("user"));
    return actions.authStateChanged(user)
  }, [])

  const values = {
    authState: authState,
    authActions: actions,
  }

  return (
    <UserContext.Provider
      value={values}
    >
      {props.children}
    </UserContext.Provider>
  );
};
