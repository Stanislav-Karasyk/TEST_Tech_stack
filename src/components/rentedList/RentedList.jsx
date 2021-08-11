import React from 'react';
import { connect } from 'react-redux';
import { toggleAvailability } from '../../redux/bikes/bikes-operations';

const RentedList = ({ bikes, onToggleAvailability }) => {
  const totalPrice = bikes.reduce(
    (total, bike) => total + Number(bike.price),
    0
    );
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
            <button
              id={id}
              type="button"
              onClick={() =>
                onToggleAvailability({ id, availability: !availability })
              }
            >
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
});

const mapStateToProps = state => ({
  bikes: state.bikes.bikes.filter(({ availability }) => !availability),
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedList);
