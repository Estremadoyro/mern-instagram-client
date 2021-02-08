export const initialState = {
  user: null,
};

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";
export const LOGOUT = "LOGOUT";

export const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_STATE_CHANGED:
      return {
        user: action.payload,
      };
    case LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};
