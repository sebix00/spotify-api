import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {light:true}

const themeReducer = createSlice({
    name:"theme",
    initialState:initialTheme,
    reducers:{
        handleTheme(state){
            state.light = !state.light
        }
    }
})

export const themeActions = themeReducer.actions;
export default themeReducer.reducer;