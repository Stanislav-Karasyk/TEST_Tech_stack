import { createAction } from '@reduxjs/toolkit';

const fetchBikesSuccess = createAction('bikes/fetchBikesSuccess');

const addBikeSuccess = createAction('bikes/addBikeSuccess');

const deleteBikeSuccess = createAction('bikes/deleteBikeSuccess');

const toggleAvailabilitySuccess = createAction(
  'bikes/toggleAvailabilitySuccess',
);

const addTimeStartRentSuccess = createAction('bikes/addTimeStartRentSuccess');

const addTimeEndRentSuccess = createAction('bikes/addTimeEndRentSuccess');



export {
  fetchBikesSuccess,
  addBikeSuccess,
  deleteBikeSuccess,
  toggleAvailabilitySuccess,
  addTimeStartRentSuccess,
  addTimeEndRentSuccess,
};
