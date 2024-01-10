import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (currentState, action) => {
      currentState.count = currentState.count + action.payload;
    },
    customIncrement: (currentState, action) => {
      currentState.count = currentState.count + action.payload;
    },
    decrement: (currentState, action) => {
      currentState.count = currentState.count - action.payload;
    },
  },
});

export const { increment, decrement, customIncrement } = counterSlice.actions;

export default counterSlice.reducer;
