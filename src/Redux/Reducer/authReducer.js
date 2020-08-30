
const initialState = {
  isLoggedIn: false,
  user: null,
  error: {},
  // authError:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { isLoggedIn: true, user: action.payload };
    case "LOGGED_OUT":
      return { isLoggedIn: false, user: null };
      case "REGISTER_ERROR":
        return {
          ...state,
          error: { registerError: action.payload },
        };
      case 'LOGIN_ERROR':
        return {
          ...state,
          error: { loginError: action.payload}
        }
    default:
      return state;
  }
};

export default authReducer;
