import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const userRegistration = createAsyncThunk(
  'user/registration',
  async userData => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userLogin = createAsyncThunk('user/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const userLogout = createAsyncThunk('user/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token('');
    return data;
  } catch (error) {
    console.log(error);
  }
});
