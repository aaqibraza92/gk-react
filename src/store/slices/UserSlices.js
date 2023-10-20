import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name: 'theme',
    initialState: {
        dayTheme: true
    },
    reducers:{
        themeType(state,action){
            state.dayTheme=action.payload
        }
    }
})

//console.log(UserSlice);

export default UserSlice.reducer;
export const {themeType} =UserSlice.actions; // this is action creator yani iske zarye store per data post hoga