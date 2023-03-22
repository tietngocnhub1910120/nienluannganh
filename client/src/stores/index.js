import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";
import profileSlice from "./profileSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authSlice,
  product: productSlice,
  profile: profileSlice,
  cart: cartSlice,
  order: orderSlice,
  //
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
