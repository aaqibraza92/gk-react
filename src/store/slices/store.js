import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import UserSlices from "./UserSlices";
import { combineReducers } from 'redux'
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, combineReducers({ theme: UserSlices}))

const store= configureStore({
    reducer: {
        persistedReducer
    },
});

const persistor = persistStore(store)
export {store,persistor}