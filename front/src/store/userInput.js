import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  favourite: [],
  track: [
    { title: "Krzysztof Krawczyk - Trudno Być", id: 1 },
    { title: "Krzysztof Krawczyk - Chciałbym Być", id: 2 },
    { title: "Krzysztof Krawczyk - Ile bym dał", id: 3 },
    { title: "Krzysztof Krawczyk - To nie to samo", id: 4},
  ],
};

const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    handleInput(state, action) {
      state.input = action.payload;
    },
    hanldeClicked(state, action) {
      const index = state.favourite.indexOf(
        (track) => (track.id = action.payload)
      );
      if (index > -1)
        state.favourite[index].isClicked = !state.favourite[index].isClicked;
    },
    hendleAddFavourite(state, action) {
      const contain = state.favourite.some(
        (track) => track.id === action.payload.id
      );
      if (!contain) state.favourite.push(action.payload);
    },
    handleRemoveFavourie(state, action) {
      const contain = state.favourite.some(
        (track) => track.id === action.payload
      );
      if (contain) {
        const index = state.favourite.findIndex(
          (track) => track.id === action.payload
        );
        console.log("rempve");
        state.favourite.splice(index, 1);
      }
    },
  },
});

export const userActions = userInputSlice.actions;
export default userInputSlice.reducer;
