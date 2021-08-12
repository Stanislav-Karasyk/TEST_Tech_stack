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
    const availability = bikes;
    const startTime = Date.now();

    onToggleAvailability({ id, availability: !availability });
    onAddTimeStartRent({ id, timeStartRent: startTime });
    
  };

  const totalBikes = bikes.length;

  return (
    <div>
      <p>
        Available List <span>({totalBikes})</span>
      </p>
      <ul>
        {bikes.map(({ id, name, type, price, availability, timeStartRent }) => (
          <li key={id}>
            <span>
              {name} / {type} / ${price}
            </span>
            <button id={id} type="button" onClick={handleRent}>
              Rent
            </button>
            <button id={id} type="button" onClick={handleDelete}>
              Delete
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
