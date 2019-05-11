import { CREATE_POST, POST_ERROR } from "../actions/types";

const initialState = {
  posts: []
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts]
      };
    case POST_ERROR:
      return state;
    default:
      return state;
  }
}
