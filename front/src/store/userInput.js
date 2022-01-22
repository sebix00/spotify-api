import { createSlice } from "@reduxjs/toolkit";

const initialState = { input: "" };

const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    handleInput(state, action) {
      state.input = action.payload;
    },
  },
});

export const userActions = userInputSlice.actions;
export default userInputSlice.reducer;
