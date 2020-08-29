import firebase from "../../Firebase/firebase";
// import { firestore } from "firebase";

export const addNewPost = (newPost, uid) => {
  return async (dispatch) => {
    try {
      await firebase
        .firestore()
        .collection("userPost")
        .add({
          ...newPost,
          uid: uid,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllPosts = () => {
  // console.log(firestore)
  return async (dispatch) => {
    firebase
      .firestore()
      .collection("userPost")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        dispatch({ type: "GET_ALL_EXP_VALUES", payload: posts });
      });
  };
};

// export const getAllPosts = (newPost) => {
//     return {
//       type: "GET_ALL_EXP_VALUES",
//       payload: newPost,
//     };
//   };
