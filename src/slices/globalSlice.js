import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMapReady: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setValue: (state, { payload }) => {
      const { key, value } = payload || {};
      state[key] = value;
    },
    pushValue: (state, { payload }) => {
      const { key, value } = payload || {};
      state[key] = [...state[key], value];
    }
  },
});

export const { setValue, pushValue } = globalSlice.actions;
export default globalSlice.reducer;