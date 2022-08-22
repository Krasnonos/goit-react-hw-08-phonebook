import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  createContact,
  removeContact,
  changeContact,
} from './contactsOperation';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
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
    [changeContact.fulfilled](state, action) {
      state.contacts = state.contacts.map(contact => {
        return contact.id !== action.payload.id
          ? contact
          : { ...contact, ...action.payload };
      });
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
