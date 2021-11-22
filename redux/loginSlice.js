import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "form_login",
  initialState: {
    data: {
      email: "",
      password: "",
    },
  },
  reducers: {
    setEmailLogin: (state, action) => {
      state.data.email = action.payload;
    },
    setPasswordLogin: (state, action) => {
      state.data.password = action.payload;
    },
  },
});

// Export Setter
export const { setEmailLogin, setPasswordLogin } = loginSlice.actions;

// Buat store yang nge bind "nama" slice ke slice fungsinya ini dilakukan di store.js

// Export Selector, dimana mengarahkan ke "nama" slice dan nama statenya
export const selectLoginData = (state) => state.form_login.data;

// Export Reducer
export default loginSlice.reducer;
