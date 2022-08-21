import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = ``;
  },
};

export const userRegistration = createAsyncThunk(
  'user/registration',
  async userData => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userLogin = createAsyncThunk('user/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const userLogout = createAsyncThunk('user/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset('');
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
      };
    }

    token.set(persistedToken);
    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
