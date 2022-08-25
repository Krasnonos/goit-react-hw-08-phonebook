import { createSlice } from '@reduxjs/toolkit';
import { lightTeme } from '../theme';

const initialState = {
  theme: { ...lightTeme },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
