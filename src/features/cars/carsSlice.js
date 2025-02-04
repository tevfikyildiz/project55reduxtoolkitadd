import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  cars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },

 
    addCar: (state, action) => {
      state.cars.push(action.payload);
      state.count += 1;
    },


    removeCar: (state, action) => {
      state.cars = state.cars.filter(car => car.name !== action.payload.name);
      state.count -= 1;
    },
  },
});

export const { increment, decrement, addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
