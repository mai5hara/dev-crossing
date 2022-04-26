/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  tabKey: '1',
  error: {},
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    start_fetch: (state) => {
      state.loading = true
    },
    get_profiles: (state, action) => {
      console.log('features get_profiles==')
      state.loading = false
      state.profiles = action.payload
      state.error = null
    },
    get_profile: (state, action) => {
      console.log('features get_profile==')
      state.loading = false
      state.profile = action.payload
      state.error = null
    },
    update_profile: (state, action) => {
      state.loading = false
      state.profile = action.payload
      state.error = null
    },
    get_repos: (state, action) => {
      state.loading = false
      state.repos = action.payload
    },
    set_error: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.profile = null
    },
    clear_profile: (state) => {
      state.loading = false
      state.profile = null
      state.repos = []
    },
    set_currentTab: (state, action) => {
      state.tabKey = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const { start_fetch, get_profiles, get_profile, update_profile, get_repos, set_error, clear_profile, set_currentTab } = profileSlice.actions;

export const profileSelector = state => state.profile

export default profileSlice.reducer;