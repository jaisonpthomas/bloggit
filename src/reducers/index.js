import { combineReducers } from "redux";
import auth from "./auth";
import post from "./post";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  auth,
  post,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
