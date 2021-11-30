import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'
import { removeElementList } from "../utils/helper/removeElementList";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    data: [],
  },
  reducers: {
    deleteToastID: (state, action) => {
      for (let i = 0; i < state.data.length; i++) {
        if (action.payload == state.data[i].id) {
          state.data = removeElementList(state.data, i)
          break
        }
      }

    },
    createToastWarning: (state, action) => {
      state.data.push({ id: nanoid(), message: action.payload, type: "warning" })
    }, 
    createToastError: (state, action) => {
      state.data.push({ id: nanoid(), message: action.payload, type: "error" })
    }, 
    createToastSuccess: (state, action) => {
      state.data.push({ id: nanoid(), message: action.payload, type: "success" })
    }
  },
});

// Export Setter
export const { deleteToastID, createToastWarning, createToastError, createToastSuccess } = toastSlice.actions;

// Buat store yang nge bind "nama" slice ke slice fungsinya ini dilakukan di store.js

// Export Selector, dimana mengarahkan ke "nama" slice dan nama statenya
export const selectToast = (state) => state.toast.data;

// Export Reducer
export default toastSlice.reducer;
