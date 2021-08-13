import axios from 'axios';
import {
  fetchBikesSuccess,
  addBikeSuccess,
  deleteBikeSuccess,
  toggleAvailabilitySuccess,
  addTimeStartRentSuccess,
  addTimeEndRentSuccess,
} from './bikes-actions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchBikes = () => async dispatch => {
  try {
    const { data } = await axios.get('/bikes');
    console.log(data)
    dispatch(fetchBikesSuccess(data.data.bikes));
  } catch (err) {}
};

const addBike =
  ({ name, type, price }) =>
  async dispatch => {
    const bike = {
      name,
      type,
      price,
      availability: true,
    };

    try {
      const { data } = await axios.post('/bikes', bike);
      dispatch(addBikeSuccess(data));
    } catch (err) {}
  };

const deleteBike = id => async dispatch => {
  try {
    await axios.delete(`/bikes/${id}`);
    dispatch(deleteBikeSuccess(id));
  } catch (err) {}
};

const toggleAvailability =
  ({ id, availability }) =>
  dispatch => {
    const update = { availability };
    axios
      .patch(`/bikes/${id}`, update)
      .then(({ data }) => dispatch(toggleAvailabilitySuccess(data)))
      .catch();
  };

const addTimeStartRent =
  ({ id, timeStartRent }) =>
  dispatch => {
    const update = { timeStartRent };
    axios
      .patch(`/bikes/${id}`, update)
      .then(({ data }) => dispatch(addTimeStartRentSuccess(data)))
      .catch();
  };

const addTimeEndRent =
  ({ id, timeEndRent }) =>
  dispatch => {
    const update = { timeEndRent };
    axios
      .patch(`/bikes/${id}`, update)
      .then(({ data }) => dispatch(addTimeEndRentSuccess(data)))
      .catch();
  };

export {
  fetchBikes,
  addBike,
  deleteBike,
  toggleAvailability,
  addTimeStartRent,
  addTimeEndRent,
};
