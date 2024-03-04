export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

export const signUpRequest = (userData) => ({ type: SIGN_UP_REQUEST, payload: userData });
export const signUpSuccess = (userData) => ({ type: SIGN_UP_SUCCESS, payload: userData });
export const loginRequest = (userData) => ({ type: LOGIN_REQUEST, payload: userData });
export const loginSuccess = (userData) => ({ type: LOGIN_SUCCESS, payload: userData });
export const addPost = (post) => ({ type: ADD_POST, payload: post });
export const addComment = (comment) => ({ type: ADD_COMMENT, payload: comment });
