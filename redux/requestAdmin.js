import { createSlice } from "@reduxjs/toolkit";

const requestAdminSlice = createSlice({
  name: "request_admin",
  initialState: {
    data: [],
  },
  reducers: {
    setDataListRequestAdmin: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Export Setter
export const { setDataListRequestAdmin } = requestAdminSlice.actions;

// Buat store yang nge bind "nama" slice ke slice fungsinya ini dilakukan di store.js

// Export Selector, dimana mengarahkan ke "nama" slice dan nama statenya
export const selectRequestAdmin = (state) => state.request_admin.data;

// Export Reducer
export default requestAdminSlice.reducer;
