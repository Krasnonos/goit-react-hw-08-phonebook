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
  createContactLoading: false,
  removeContactLoading: false,
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
      state.createContactLoading = false;
    },
    [createContact.rejected](state) {
      state.createContactLoading = false;
    },
    [createContact.pending](state) {
      state.createContactLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
      state.removeContactLoading = false;
    },
    [removeContact.rejected](state) {
      state.removeContactLoading = false;
    },
    [removeContact.pending](state) {
      state.removeContactLoading = true;
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
