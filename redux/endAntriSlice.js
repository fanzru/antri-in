import { createSlice } from "@reduxjs/toolkit";

const endAntrianSlice = createSlice({
  name: "end_antrian",
  initialState: {
    status: false,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Export Setter
export const { setStatus } = endAntrianSlice.actions;

// Buat store yang nge bind "nama" slice ke slice fungsinya ini dilakukan di store.js

// Export Selector, dimana mengarahkan ke "nama" slice dan nama statenya
export const selectEndAntrianStatus = (state) => state.end_antrian.status;

// Export Reducer
export default endAntrianSlice.reducer;
