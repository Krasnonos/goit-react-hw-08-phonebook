import { createSlice } from '@reduxjs/toolkit';
import { getContacts, createContact, removeContact } from './contactsOperation';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [createContact.fulfilled](state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    [removeContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});
