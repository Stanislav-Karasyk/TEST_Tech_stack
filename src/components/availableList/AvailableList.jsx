import React from 'react';
import { connect } from 'react-redux';
import {
  deleteBike,
  toggleAvailability,
  addTimeStartRent,
} from '../../redux/bikes/bikes-operations';

const AvailableList = ({
  bikes,
  onDeleteBike,
  onToggleAvailability,
  onAddTimeStartRent,
}) => {
  const handleDelete = e => {
    onDeleteBike(e.target.id);
  };

  const handleRent = e => {
    const id = e.target.id;
    const availability = true;
    const startTime = Date.now();

    console.log("bikes", bikes);
    onToggleAvailability({ id, availability: !availability });
    onAddTimeStartRent({ id, timeStartRent: startTime });
  };

  const handleTimeRent = e => {
    const id = e.target.id;
    return bikes.map(bike => {
      if (bike._id == id) {
        const dif = bike.timeEndRent - bike.timeStartRent;
        const minutes = Math.floor(dif / (1000 * 60));
        const hours = Math.floor(dif / (1000 * 60 * 60));
        alert(`RENT: ${hours}(hours) and ${minutes}(minutes)`);
      }
    });
  };

  const totalBikes = bikes.length;

  return (
    <div>
      <p>
        Available List <span>({totalBikes})</span>
      </p>
      <ul>
        {bikes.map(({ _id, name, type, price }) => (
          <li key={_id}>
            <span>
              {name} / {type} / ${price}
            </span>
            <button id={_id} type="button" onClick={handleRent}>
              Rent
            </button>
            <button id={_id} type="button" onClick={handleDelete}>
              Delete
            </button>
            <button id={_id} type="button" onClick={handleTimeRent}>
              TimeRent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteBike: id => dispatch(deleteBike(id)),
  onToggleAvailability: id => dispatch(toggleAvailability(id)),
  onAddTimeStartRent: id => dispatch(addTimeStartRent(id)),
});

const mapStateToProps = state => ({
  bikes: state.bikes.bikes.filter(({ availability }) => availability),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableList);
