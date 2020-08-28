import firebase from "../../Firebase/firebase";
import { firestore } from "firebase";

export const addNewPost = (newPost) => {
  return async (dispatch) => {
    try {
      await firebase
        .firestore()
        .collection("userPost")
        .add({
          ...newPost,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllPosts = (newPost) => {
  // console.log(firestore)
  return async (dispatch) => {
    await firebase.firestore.collection("userPost")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        dispatch({ type: "GET_ALL_EXP_VALUES", payload: newPost });
      });
  };
};

// export const getAllPosts = (newPost) => {
//     return {
//       type: "GET_ALL_EXP_VALUES",
//       payload: newPost,
//     };
//   };
