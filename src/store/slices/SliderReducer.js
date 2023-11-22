import { createSlice } from "@reduxjs/toolkit";

const SliderReducer= createSlice({
    name: 'Slider',
    initialState: {
        viewPort: false
    },
    reducers:{
        viewPortFunc(state,action){
            state.viewPort=action.payload
        }
    }
})


export default SliderReducer.reducer;
export const {viewPortFunc} =SliderReducer.actions; 