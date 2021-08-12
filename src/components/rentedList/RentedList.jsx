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
    const availability = bikes;
    const endTime = Date.now();

    onToggleAvailability({ id, availability });
    onAddTimeEndRent({ id, timeEndRent: endTime });
  };

  return (
    <div>
      <p>
        Rented List <span>(Total: ${totalPrice})</span>
      </p>
      <ul>
        {bikes.map(({ id, name, type, price, availability }) => (
          <li key={id}>
            <span>
              {name} / {type} / ${price}
            </span>
            <button id={id} type="button" onClick={handleCancelRent}>
              Cancel rent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onToggleAvailability: id => dispatch(toggleAvailability(id)),
  onAddTimeEndRent: id => dispatch(addTimeEndRent(id)),
});

const mapStateToProps = state => ({
  bikes: state.bikes.bikes.filter(({ availability }) => !availability),
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedList);
