import { ADD_POST, ADD_COMMENT } from './action'; 

const initialState = {
  postData: [],
  commentData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return { ...state, postData: [...state.postData, action.payload] };
    case 'ADD_COMMENT':
      return { ...state, commentData: [...state.commentData, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;