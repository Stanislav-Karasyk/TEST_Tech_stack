import { createAction } from "@reduxjs/toolkit";

const fetchBikesRequest = createAction("bikes/fetchBikesRequest");
const fetchBikesSuccess = createAction("bikes/fetchBikesSuccess");
const fetchBikesError = createAction("bikes/fetchBikesError");

const addBikeRequest = createAction("bikes/addBikeRequest");
const addBikeSuccess = createAction("bikes/addBikeSuccess");
const addBikeError = createAction("bikes/addBikeError");

const deleteBikeRequest = createAction("bikes/deleteBikeRequest");
const deleteBikeSuccess = createAction("bikes/deleteBikeSuccess");
const deleteBikeError = createAction("bikes/deleteBikeError");

const toggleAvailabilityRequest = createAction("bikes/toggleAvailabilityRequest");
const toggleAvailabilitySuccess = createAction("bikes/toggleAvailabilitySuccess");
const toggleAvailabilityError = createAction("bikes/toggleAvailabilityError");

export {
  fetchBikesRequest,
  fetchBikesSuccess,
  fetchBikesError,
  addBikeRequest,
  addBikeSuccess,
  addBikeError,
  deleteBikeRequest,
  deleteBikeSuccess,
  deleteBikeError,
  toggleAvailabilityRequest,
  toggleAvailabilitySuccess,
  toggleAvailabilityError,
};
