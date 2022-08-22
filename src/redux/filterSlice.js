import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => {
      console.log(state);
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
