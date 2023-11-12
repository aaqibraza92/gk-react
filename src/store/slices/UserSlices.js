import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name: 'theme',
    initialState: {
        dayTheme: true,
        flip: true,
        viewPort: false
    },
    reducers:{
        themeType(state,action){
            state.dayTheme=action.payload
        },
        actiionFlip(state,action){
            state.flip=action.payload
        },
        viewPortFunc(state,action){
            state.viewPort=action.payload
        }
    }
})

//console.log(UserSlice);

export default UserSlice.reducer;
export const {themeType,actiionFlip,viewPortFunc} =UserSlice.actions; // this is action creator yani iske zarye store per data post hoga