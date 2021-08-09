import React from "react";

const AvailableList = () => {
  const bikes = [
    {
      id: "1",
      name: "Test",
      type: "City",
      price: 10,
    },
    {
      id: "2",
      name: "Test2",
      type: "Mountain",
      price: 15,
    },
  ];
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
            <button id={id} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableList;
