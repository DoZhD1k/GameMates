import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import todoReducer from "./reducer.ts";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
