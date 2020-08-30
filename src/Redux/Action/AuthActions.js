import firebase from "../../Firebase/firebase";

export function registerUser(firstName, lastName, email, password) {
  return async (dispatch) => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // console.log(response)
      if (response.user.uid) {
        const user = {
          uid: response.user.uid,
          firstName: firstName,
          lastName: lastName,
          email: email,
          initials: firstName[0] + lastName[0],
          timeStamp: new Date(),
        };

        firebase
          .firestore()
          .collection("users")
          .doc(response.user.uid)
          .set(user);
      }
      
      dispatch({
        type: "LOGGED_IN",
        payload: response,
      });
    } catch (error) {
      // console.log(error);
      dispatch(registerError(error.message))
    }
  };
}

export function signIn(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch({
        type: "LOGGED_IN",
        payload: user,
      });
    } catch (error) {
      // console.log(error);
      dispatch(loginError(error.message))
      
    }
  };
}
export function signOut() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();

      dispatch({
        type: "LOGGED_OUT",
      });
    } catch (error) {
      console.log(error);
    }
  };
}





export function registerError(error){
  return{
      type: 'REGISTER_ERROR',
      payload: error
  }
}
export function loginError(error){
  return{
      type: 'LOGIN_ERROR',
      payload: error
  }
}