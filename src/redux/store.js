// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({

// })

// export default store;

import { createStore } from 'redux';

// Используем редюсер-болванку
const reducer = (state = {}, action) => state;

const store = createStore(reducer);

export default store;