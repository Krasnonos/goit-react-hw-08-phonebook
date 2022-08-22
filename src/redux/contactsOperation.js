import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ id, name, number }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
