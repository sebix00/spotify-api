import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  input: "",
  tracks: [],
  isLoading:false,
};

const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    handleInput(state, action) {
      state.input = action.payload;
    },
    handleFavourite(state,action){
      const index = state.tracks.findIndex(track=>track.id===action.payload);
      if(index>-1){
        state.tracks[index].isFavourite = !state.tracks[index].isFavourite;
      }

    },
    replaceTrack(state,action){
      state.tracks = action.payload;
    },
    setLoading(state,action){
      state.isLoading = action.payload;

    }
    
    
  },
});



export const userActions = userInputSlice.actions;
export default userInputSlice.reducer;
