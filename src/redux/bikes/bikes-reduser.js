import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchBikesSuccess,
  addBikeSuccess,
  deleteBikeSuccess,
  toggleAvailabilitySuccess,
  addTimeStartRentSuccess,
  addTimeEndRentSuccess,
} from './bikes-actions';

const bikes = createReducer([], {
  [fetchBikesSuccess]: (_, { payload }) => payload,
  [addBikeSuccess]: (state, { payload }) => [...state, payload],
  [deleteBikeSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== Number(payload)),
  [toggleAvailabilitySuccess]: (state, { payload }) =>
    [...state.map(bike => (bike.id === payload.id ? payload : bike))],
  [addTimeStartRentSuccess]: (state, { payload }) =>
    state.map(bike => (bike.id === payload.id ? payload : bike)),
  [addTimeEndRentSuccess]: (state, { payload }) =>
    state.map(bike => (bike.id === payload.id ? payload : bike)),
});

export default combineReducers({
  bikes,
});
