import axios from 'axios';
import { get_posts, update_likes, set_error, start_fetch, delete_post, add_post, get_post, add_comment, delete_comment, set_currentTab } from '../features/postSlice';
import { setAlert } from './alert';

// Get posts
export const getPosts = () => async (dispatch) => {
  dispatch(start_fetch());

  try {
    const res = await axios.get('/api/posts');
    dispatch(get_posts(res.data))
  } catch (err) {
    dispatch(set_error({ msg: err.response.statusText, status: err.response.status }))
  }
};

//Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);
    dispatch(update_likes({ id, likes: res.data }))
  } catch (err) {
    dispatch(set_error({ msg: err.response.statusText, status: err.response.status }))
  }
};

//Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);
    dispatch(update_likes({ id, likes: res.data }))
  } catch (err) {
    dispatch(set_error({ msg: err.response.statusText, status: err.response.status }))
  }
};

//Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);
    dispatch(delete_post(id));
    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch(set_error({ msg: err.response.statusText, status: err.response.status }))
  }
};

//Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`/api/posts`, formData, config);
    dispatch(add_post(res.data))
    dispatch(setAlert('Post created', 'success'));
  } catch (err) {
    dispatch(set_error({ msg: err.response.statusText, status: err.response.status }))
  }
};

// Get post
export const getPost = (id) => async (dispatch) => {
  dispatch(start_fetch());
  
  try {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch(get_post(res.data))
  } catch (err) {
    dispatch(set_error({ msg: err.response.statusText, status: err.response.status }))
  }
};

//Add comment
export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch(add_comment(res.data))
    dispatch(setAlert('Comment added', 'success'));
  } catch (err) {
    dispatch(set_error({ msg: err.response.statusText, status: err.response.status }))
  }
};

//Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
    dispatch(delete_comment(commentId));
    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch(set_error({ msg: err.response.statusText, status: err.response.status }))
  }
};

// Current Tab
export const handleTabs = (currentTabKey) => (dispatch) => {
  console.log('currentTabKey', currentTabKey)
  dispatch(set_currentTab(currentTabKey))
}