import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChecked: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.isChecked = action.payload.isChecked;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
