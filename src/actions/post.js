import { CREATE_POST, POST_ERROR } from "./types";

export const createPost = post => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  try {
    const firestore = getFirestore();
    const firebaseData = getState().firebase;
    const { firstName, lastName } = firebaseData.profile;
    const authorId = firebaseData.auth.uid;
    await firestore.collection("posts").add({
      ...post,
      authorFirstName: firstName,
      authorLastName: lastName,
      authorId: authorId,
      createdAt: new Date()
    });
    dispatch({
      type: CREATE_POST,
      payload: post
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err
    });
  }
};
