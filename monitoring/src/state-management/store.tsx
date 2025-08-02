import { configureStore } from "@reduxjs/toolkit";
import sensorReducer from "./sensorSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    sensorData: sensorReducer,
    modal: modalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
