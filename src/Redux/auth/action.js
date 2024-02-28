export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';


export const addPost = (post) => ({ type: 'ADD_POST', payload: post });
export const addComment = (comment) => ({ type: 'ADD_COMMENT', payload: comment });
