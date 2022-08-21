import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const { data } = await axios('/contacts');
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
