import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBikes, addBike } from '../../redux/bikes/bikes-operations';

class BikeForm extends Component {
  state = {
    name: '',
    type: '',
    price: '',
  };

  componentDidMount() {
    this.props.onfetchBikes();
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddBike(this.state);
    this.setState({ name: '', type: '', price: '' });
  };

  render() {
    const { name, type, price } = this.state;

    return (
      <div>
        <h2>Create new rent</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Bike name
            <input
              name="name"
              type="text"
              onChange={this.handleInput}
              value={name}
            />
          </label>
          <label>
            Bike type
            <select
              name="type"
              type="text"
              onChange={this.handleInput}
              value={type}
            >
              <option value="" disabled></option>
              <option value="City">City</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="BMX">BMX</option>
              <option value="Electric">Electric</option>
            </select>
          </label>
          <label>
            Rent price
            <input
              name="price"
              type="text"
              onChange={this.handleInput}
              value={price}
            />
          </label>
          <button type="submit">Submit rent</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddBike: ({ name, type, price }) =>
    dispatch(addBike({ name, type, price })),
  onfetchBikes: () => dispatch(fetchBikes()),
});

export default connect(null, mapDispatchToProps)(BikeForm);
