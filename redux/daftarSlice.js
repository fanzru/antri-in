import { createSlice } from "@reduxjs/toolkit";

const daftarSlice = createSlice({
  name: "form_daftar",
  initialState: {
    data: {
      nama: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    setNama: (state, action) => {
      state.data.nama = action.payload;
    },
    setEmail: (state, action) => {
      state.data.email = action.payload;
    },
    setPassword: (state, action) => {
      state.data.password = action.payload;
    },
  },
});

// Export Setter
export const { setNama, setEmail, setPassword } = daftarSlice.actions;

// Buat store yang nge bind "nama" slice ke slice fungsinya ini dilakukan di store.js

// Export Selector, dimana mengarahkan ke "nama" slice dan nama statenya
export const selectDaftarData = (state) => state.form_daftar.data;

// Export Reducer
export default daftarSlice.reducer;

