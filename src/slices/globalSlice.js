import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMapReady: false,
  points: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          110.98394507648061,
          -7.472676268794487
        ],
        type: "Point"
      }
    }
  ],
  polygons: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        "coordinates": [
          [
            [
              110.9307593510469,
              -6.996845297601567
            ],
            [
              110.9307593510469,
              -7.389239638100591
            ],
            [
              111.55698005417173,
              -7.389239638100591
            ],
            [
              111.55698005417173,
              -6.996845297601567
            ],
            [
              110.9307593510469,
              -6.996845297601567
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ],
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