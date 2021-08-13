import React from 'react';
import { connect } from 'react-redux';
import {
  toggleAvailability,
  addTimeEndRent,
} from '../../redux/bikes/bikes-operations';

const RentedList = ({ bikes, onToggleAvailability, onAddTimeEndRent }) => {
  const totalPrice = bikes.reduce(
    (total, bike) => total + Number(bike.price),
    0,
  );

  const handleCancelRent = e => {
    const id = e.target.id;
    const availability = false;
    const endTime = Date.now();


    onToggleAvailability({ id, availability: !availability });
    onAddTimeEndRent({ id, timeEndRent: endTime });
  };

  return (
    <div>
      <p>
        Rented List <span>(Total: ${totalPrice})</span>
      </p>
      <ul>
        {bikes.map(({ _id, name, type, price }) => (
          <li key={_id}>
            <span>
              {name} / {type} / ${price}
            </span>
            <button id={_id} type="button" onClick={handleCancelRent}>
              Cancel rent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onToggleAvailability: _id => dispatch(toggleAvailability(_id)),
  onAddTimeEndRent: id => dispatch(addTimeEndRent(id)),
});

const mapStateToProps = state => ({
  bikes: state.bikes.bikes.filter(({ availability }) => !availability),
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedList);
