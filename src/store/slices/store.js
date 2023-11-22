import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import UserSlices from "./UserSlices";
import { combineReducers } from 'redux'
import SliderReducer from "./SliderReducer";
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['viewPort'] // this is reducer state
  }
  const persistedReducer = persistReducer(persistConfig, combineReducers({ theme: UserSlices, Slider: SliderReducer}))


  
const store= configureStore({
    reducer: {
        persistedReducer
    },
});

const persistor = persistStore(store)
export {store,persistor}