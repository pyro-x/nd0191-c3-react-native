import { createSlice } from "@reduxjs/toolkit";
import * as status from "../status";


const name = 'regions';
const initialState = {
    list : {
        regions : [],

    },
    loading: false, 
    error: null,
}


const reducers = {
    loadRegions: (state) => {
        // empty action to trigger the saga
    },
    loadRegionsStart(state) {
        state.loading = true;
        state.error = null;
      },
      loadRegionsSuccess(state, action) {
        state.list.regions = action.payload;
        state.loading = false;
      },
      loadRegionsFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      }
}

const slice = createSlice({
    name,
    initialState,
    reducers
});

// this is the action that trigger the whole load process with the saga we will watch for this
// but as it doesn't modify the state we will creact only the action and not the reducer


export const { loadRegionsStart, loadRegionsSuccess, loadRegionsFailure , loadRegions } = slice.actions;

export default slice.reducer;