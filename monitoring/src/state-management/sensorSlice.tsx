import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SensorProps } from "../models/SensorModel";
import { sensorService } from "../apiServices/sensorService";
export interface SensorState {
  items: SensorProps[];
}

const initialState: SensorState = {
  items: sensorService.getAll()
};
export const sensorSlice = createSlice({
  name: "sensorData",
  initialState,
  reducers: {
    addSensor: (state, action: PayloadAction<SensorProps>) => {
      //   state.items.push(action.payload);
      state.items = [...state.items, action.payload];
      sensorService.setDataInLocalStorage(state.items);
    },
    removeSensor: (state, action: PayloadAction<SensorProps>) => {
      state.items = state.items.filter((q) => q.id !== action.payload.id);
    },
    editSensor: (state, action: PayloadAction<SensorProps>) => {
      const index = state.items.findIndex(
        (sensor) => sensor.id === action.payload.id
      );
      state.items[index] = action.payload;
      sensorService.setDataInLocalStorage(state.items);
    },
    updateSensorValues:(state)=>{
      
      state.items.map((s)=>{
        s.value = Math.floor(Math.random()*100)+1
      })
      sensorService.setDataInLocalStorage(state.items)
    }
  },
});

export const { addSensor, removeSensor, editSensor,updateSensorValues } = sensorSlice.actions;
export default sensorSlice.reducer;
