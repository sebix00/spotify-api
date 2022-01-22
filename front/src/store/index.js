import { configureStore } from "@reduxjs/toolkit";
import inputReduer from "./userInput";
import themeReducer from "./theme";

const store = configureStore({
  reducer: {
    input: inputReduer,
    theme: themeReducer,
  },
});

export default store;
