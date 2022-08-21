import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contactsOperation';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
  },
});
