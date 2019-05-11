import { LOGIN, AUTH_ERROR, LOGOUT, REGISTER } from "./types";

export const login = credentials => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  try {
    const firebase = getFirebase();
    await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);
    dispatch({
      type: LOGIN
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err
    });
  }
};

export const logout = () => async (dispatch, getState, { getFirebase }) => {
  try {
    const firebase = getFirebase();
    await firebase.auth().signOut();
    dispatch({
      type: LOGOUT
    });
  } catch (err) {}
};

export const register = userData => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const { email, password, firstName, lastName } = userData;
  try {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await firestore
      .collection("users")
      .doc(res.user.uid)
      .set({
        firstName: firstName,
        lastName: lastName,
        initials: firstName[0] + lastName[0]
      });
    dispatch({ type: REGISTER });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err
    });
  }
};
