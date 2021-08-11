import React from 'react';
import { connect } from 'react-redux';
import {
  deleteBike,
  toggleAvailability,
} from '../../redux/bikes/bikes-operations';

const AvailableList = ({ bikes, onDeleteBike, onToggleAvailability }) => {
  const handleDelete = e => {
    onDeleteBike(e.target.id);
  };

  const totalBikes = bikes.length;
  
  return (
    <div>
      <p>Available List <span>({totalBikes})</span></p>
      <ul>
        {bikes.map(({ id, name, type, price, availability }) => (
          <li key={id}>
            <span>
              {name} / {type} / ${price}
            </span>
            <button
              id={id}
              type="button"
              onClick={() =>
                onToggleAvailability({ id, availability: !availability })
              }
            >
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
});

const mapStateToProps = state => ({
  bikes: state.bikes.bikes.filter(({availability}) => availability )
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableList);
