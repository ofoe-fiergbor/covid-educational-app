import firebase from "../../Firebase/firebase";
// import { firestore } from "firebase";

export const addNewPost = (newPost, Userid, userEmail) => {
  return async (dispatch) => {
    try {

      await firebase
        .firestore()
        .collection("userPost")
        .add({
          ...newPost,
          // firstName:'',
          uid: Userid,
          userEmail: userEmail,
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
