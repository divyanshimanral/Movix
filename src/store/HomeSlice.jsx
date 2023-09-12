import { createSlice } from "@reduxjs/toolkit";

// to create global state that gonna use everywhere in the react app
export const homeSlice = createSlice({
  // name of slice
  name: "home",
  // define initial state obj in this we have our all states
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    // mutate the logics using reducer functions
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export the actions
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
