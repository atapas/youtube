import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import canvasReducer from '../features/canvas/canvasSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    canvas: canvasReducer,
  },
});
