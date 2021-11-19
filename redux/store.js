import daftarSlice from "./daftarSlice";
import loginSlice from "./loginSlice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

export const Store = configureStore({
  reducer: combineReducers({
    form_daftar: daftarSlice, //
    form_login: loginSlice,
  }),
});

export default { Store };
