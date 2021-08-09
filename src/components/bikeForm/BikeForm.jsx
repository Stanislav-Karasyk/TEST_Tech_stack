import React from "react";

const BikeForm = () => {
  return (
    <div>
      <h2>Create new rent</h2>
      <form>
        <label>
          Bike name
          <input name="name" type="text" />
        </label>
        <label>
          Bike type
          <select name="type" type="text">
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
          <input name="price" type="number" />
        </label>
        <button type="submit">Submit rent</button>
      </form>
    </div>
  );
};

export default BikeForm;
