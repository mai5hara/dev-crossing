import {
  GET_POSTS,
  POST_ERROR
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_POSTS:
      console.log(payload)
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case POST_ERROR:
      return {
        ...state,
        posts: payload,
        loading: false
      }
    default:
      return state;
  }
}