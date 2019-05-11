import { LOGIN, LOGOUT, REGISTER, AUTH_ERROR } from "../actions/types";

const initialState = {
  authError: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
    case REGISTER:
      console.log("login/register success");
      return {
        ...state,
        authError: null
      };
    case AUTH_ERROR:
      console.error("login/register error");
      return {
        ...state,
        authError: payload.message
      };
    case LOGOUT:
      console.log("logout success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
}
