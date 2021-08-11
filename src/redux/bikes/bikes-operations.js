import axios from 'axios';
import {
  fetchBikesSuccess,
  addBikeSuccess,
  deleteBikeSuccess,
  toggleAvailabilitySuccess
} from './bikes-actions';

axios.defaults.baseURL = 'http://localhost:3004';

const fetchBikes = () => async dispatch => {
  try {
    const { data } = await axios.get('/bikes');
    dispatch(fetchBikesSuccess(data));
  } catch (error) {}
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
    } catch (error) {}
  };

const deleteBike = id => async dispatch => {
  try {
    await axios.delete(`/bikes/${id}`);
    dispatch(deleteBikeSuccess(id));
  } catch (error) {}
};

const toggleAvailability = ({ id, availability }) => dispatch => {
    const update = { availability };
  
    axios
      .patch(`/bikes/${id}`, update)
      .then(({ data }) => dispatch(toggleAvailabilitySuccess(data)))
      .catch();
  };

export { fetchBikes, addBike, deleteBike, toggleAvailability };
