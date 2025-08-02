import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  flag: boolean;
}

const initialState: modalState = {
  flag: false,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.flag = true;
    },
    closeModal: (state) => {
      state.flag = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
