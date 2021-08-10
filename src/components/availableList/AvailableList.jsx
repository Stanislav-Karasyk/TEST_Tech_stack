import React from 'react';
import { connect } from 'react-redux';
import { deleteBike } from '../../redux/bikes/bikes-operations';

const AvailableList = ({ bikes, deleteBike }) => {

  const onHandleChange = e => {
    deleteBike(e.target.id);
  };

  return (
    <div>
      <h1>Available List</h1>
      <ul>
        {bikes.map(({ id, name, type, price }) => (
          <li key={id}>
            <span>
              {name} / {type} / ${price}
            </span>
            <button id={id} type="button">
              Rent
            </button>
            <button id={id} type="button" onClick={onHandleChange}>
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
});

const mapStateToProps = state => ({
  bikes: state.bikes.bikes
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableList);
