import axios from 'axios';
import {
  start_fetch,
  get_profiles,
  get_profile,
  update_profile,
  get_repos,
  set_error,
  clear_profile,
  set_currentTab,
} from '../features/profileSlice';
import { auth_remove } from '../features/authSlice';
import { setAlert } from './alert';

// Get current users profiles
export const getCurrentProfile = () => async (dispatch) => {
  dispatch(start_fetch());

  try {
    const res = await axios.get('/api/profile/me');
    dispatch(get_profile(res.data));
  } catch (err) {
    dispatch(
      set_error({ msg: err.response?.data.msg || err.response?.statusText, status: err.response?.status })
    );
  }
};

// Get all profiles
export const getProfiles = () => async (dispatch) => {
  dispatch(clear_profile());
  dispatch(start_fetch());

  try {
    const res = await axios.get('/api/profile');
    dispatch(get_profiles(res.data));
  } catch (err) {
    dispatch(
      set_error({ msg: err.response.statusText, status: err.response.status })
    );
  }
};

// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  dispatch(start_fetch());

  try {
    const res = await axios.get(`/api/profile/user/${userId}`);
    dispatch(get_profile(res.data));
  } catch (err) {
    dispatch(
      set_error({ msg: err.response.statusText, status: err.response.status })
    );
  }
};

// Get github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/github/${username}`);

    dispatch(get_repos(res.data));
  } catch (err) {
    dispatch(
      set_error({ msg: err.response.statusText, status: err.response.status })
    );
  }
};

//Create or Update profile
export const createProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    dispatch(start_fetch());

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post('/api/profile', formData, config);

      dispatch(get_profile(res.data));
      dispatch(
        setAlert(edit ? 'Profile Update' : 'Profile Created', 'success')
      );

      if (!edit) {
        history.push('/mypage');
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch(
        set_error({ msg: err.response.statusText, status: err.response.status })
      );
    }
  };

// Add Experience
export const addExperience = (formData, history) => async (dispatch) => {
  dispatch(start_fetch());

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put('/api/profile/experience', formData, config);

    dispatch(update_profile(res.data));

    dispatch(setAlert('Experience Added', 'success'));
    history.push('/mypage');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(
      set_error({ msg: err.response.statusText, status: err.response?.status })
    );
  }
};

// Add Education
export const addEducation = (formData, history) => async (dispatch) => {
  dispatch(start_fetch());

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put('/api/profile/education', formData, config);

    dispatch(update_profile(res.data));

    dispatch(setAlert('Education Added', 'success'));
    history.push('/mypage');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(
      set_error({ msg: err.response.statusText, status: err.response.status })
    );
  }
};

// Delete experience
export const deleteExperience = (id) => async (dispatch) => {
  dispatch(start_fetch());
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch(update_profile(res.data));
    dispatch(setAlert('Experience Removed', 'success'));
  } catch (err) {
    dispatch(
      set_error({ msg: err.response?.statusText, status: err.response?.status })
    );
  }
};

// Delete education
export const deleteEducation = (id) => async (dispatch) => {
  dispatch(start_fetch());
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch(update_profile(res.data));
    dispatch(setAlert('Education Removed', 'success'));
  } catch (err) {
    dispatch(
      set_error({ msg: err.response?.statusText, status: err.response?.status })
    );
  }
};

// Delete account & profile
export const deleteAccount = (id) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      dispatch(clear_profile());
      dispatch(auth_remove());

      dispatch(setAlert('Your account has been permanantly deleted'));
    } catch (err) {
      dispatch(
        set_error({ msg: err.response.statusText, status: err.response.status })
      );
    }
  }
};

// Current Tab
export const handleTabs = (currentTabKey) => (dispatch) => {
  dispatch(set_currentTab(currentTabKey));
};
