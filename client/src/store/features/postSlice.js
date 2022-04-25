/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: null,
  tabKey: 'all posts'
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    start_fetch: (state) => {
      state.loading = true
    },
    get_posts: (state, action) => {
      state.loading = false
      state.posts = action.payload
      state.error = null
    },
    get_post: (state, action) => {
      state.loading = false
      state.post = action.payload
    },
    delete_post: (state, action) => {
      state.loading = false
      state.posts = state.posts.filter((post) => post._id !== action.payload)
    },
    add_post: (state, action) => {
      state.loading = false
      state.posts = [action.payload, ...state.posts]
    },
    add_comment: (state, action) => {
      state.loading = false
      state.post = { 
        ...state.post, 
        comments: action.payload, 
      }
    },
    delete_comment: (state, action) => {
      state.loading = false
      state.post = {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== action.payload
          ),
        }
    },
    update_likes: (state, action) => {
      state.loading = false
      state.posts = state.posts.map((post) => post._id === action.payload.id ? { ...post, likes: action.payload.likes } : post)
    },
    set_error: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    set_currentTab: (state, action) => {
      state.tabKey = action.payload
    }
  },
  extraReducers: (builder) => {
  }
})

export const postSelector = state => state.post;

export const { get_posts, update_likes, set_error, start_fetch, delete_post, add_post, get_post, add_comment, delete_comment, set_currentTab } = postSlice.actions;

export default postSlice.reducer;
