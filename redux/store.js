import daftarSlice from "./daftarSlice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

export const Store = configureStore({
  reducer: combineReducers({
    form_daftar: daftarSlice, //
  }),
});

export default { Store };