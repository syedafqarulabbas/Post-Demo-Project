import { SIGN_UP_SUCCESS, LOGIN_SUCCESS, ADD_POST, ADD_COMMENT } from './action';

const initialState = {
  signUpData: [],
  loginData: [],
  postData: [],
  commentData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...state, signUpData: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, loginData: action.payload };
    case ADD_POST:
      return { ...state, postData: [...state.postData, action.payload] };
    case ADD_COMMENT:
      return { ...state, commentData: [...state.commentData, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;