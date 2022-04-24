import axios from 'axios';
import { start_fetch, user_loaded, auth_success, auth_remove } from '../features/authSlice';
import { clear_profile } from '../features/profileSlice';
import { setAlert } from './alert';
import setAuthToken from '../../utils/setAuthToken';

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error.response.status) {
  } else {
      return Promise.reject(error);
  }
});

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
    dispatch(user_loaded(res.data))
  } catch (err) {
    dispatch(auth_remove())
  }
};

// Register user
export const accountRegister =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const body = JSON.stringify({ name, email, password });
      const res = await axios.post('api/users', body, config);
      dispatch(auth_success(res.data))
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch(auth_remove())
    }
  };

// Login user
export const login = (email, password) => async (dispatch) => {
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch(auth_success(res.data))
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger'))
      });
    }

    dispatch(auth_remove())
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch(clear_profile());
  dispatch(auth_remove());
};
