import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  cars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCar: (state, action) => {
      const newCar = { ...action.payload, id: crypto.randomUUID() };
      state.cars.push(newCar);
      state.count += 1;
    },

    removeCar: (state, action) => {
      state.cars = state.cars.filter(car => car.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const { addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
