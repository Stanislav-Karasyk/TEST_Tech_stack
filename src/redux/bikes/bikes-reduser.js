import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchBikesSuccess,
  addBikeSuccess,
  deleteBikeSuccess,
} from "./bikes-actions";

const bikes = createReducer([], {
  [fetchBikesSuccess]: (_, { payload }) => payload,
  [addBikeSuccess]: (state, { payload }) => [...state, payload],
  [deleteBikeSuccess]: (state, { payload }) => [
    ...state.filter((item) => item.id !== Number(payload)),
  ],
});

export default combineReducers({
  bikes,
});
