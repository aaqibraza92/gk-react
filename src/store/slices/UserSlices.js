import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name: 'theme',
    initialState: {
        cntType: ""
    },
    reducers:{
        themeType(state,action){
            state.cntType=action.payload
        }
    }
})

//console.log(UserSlice);

export default UserSlice.reducer;
export const {themeType} =UserSlice.actions; // this is action creator yani iske zarye store per data post hoga