import { configureStore } from "@reduxjs/toolkit";
import inputReduer from "./userInput";
import themeReducer from "./theme";
import favouriteReducer from "./favourite-slice";

const store = configureStore({
  reducer: {
    input: inputReduer,
    theme: themeReducer,
    favourite: favouriteReducer,
  },
});

export default store;
