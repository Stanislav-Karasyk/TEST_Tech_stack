import { createAction } from "@reduxjs/toolkit";

const fetchBikesRequest = createAction("bikes/fetchBikesRequest");
const fetchBikesSuccess = createAction("bikes/fetchBikesSuccess");
const fetchBikesError = createAction("bikes/fetchBikesError");

const addBikesRequest = createAction("bikes/addBikesRequest");
const addBikesSuccess = createAction("bikes/addBikesSuccess");
const addBikesError = createAction("bikes/addBikesError");

const deleteBikesRequest = createAction("bikes/deleteBikesRequest");
const deleteBikesSuccess = createAction("bikes/deleteBikesSuccess");
const deleteBikesError = createAction("bikes/deleteBikesError");

export {
  fetchBikesRequest,
  fetchBikesSuccess,
  fetchBikesError,
  addBikesRequest,
  addBikesSuccess,
  addBikesError,
  deleteBikesRequest,
  deleteBikesSuccess,
  deleteBikesError,
};
