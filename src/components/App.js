import './App.css';
import BikeForm from './bikeForm/BikeForm';
import AvailableList from './availableList/AvailableList';
import RentedList from './rentedList/RentedList';

function App() {
  return (
    <div className="App">
      <h1>Awesome Bike Rental</h1>
     <BikeForm></BikeForm>
     <AvailableList></AvailableList>
     <RentedList></RentedList>
    </div>
  );
}

export default App;
