import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trackList : []
}

const favouriteSlice = createSlice({
    name:"favourite",
    initialState,
    reducers:{
        hendleAddFavourite(state, action) {
            const contain = state.trackList.some(
              (track) => track.id === action.payload.id
            );
            if (!contain){
               state.trackList.push(action.payload)
               const index = state.trackList.findIndex(track=>track.id===action.payload.id);
               state.trackList[index].isFavourite=true;
              };
          },
          handleRemoveFavourie(state, action) {
            const contain = state.trackList.some(
              (track) => track.id === action.payload
            );
            if (contain) {
              const index = state.trackList.findIndex(track=>track.id===action.payload);
              console.log(index);
              state.trackList[index].isFavourite=false;
              state.trackList = state.trackList.filter(
                (track) => track.id !== action.payload
              );
  
            }
          },
          replaceFavourite(state,action){
            state.trackList = action.payload;

          }
    }
})


export const favouriteAction = favouriteSlice.actions;

export default favouriteSlice.reducer;