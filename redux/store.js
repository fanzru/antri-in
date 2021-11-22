import daftarSlice from "./daftarSlice";
import loginSlice from "./loginSlice";
import endAntrianSlice from "./endAntriSlice"
import requestAdminSlice from "./requestAdmin"

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

export const Store = configureStore({
  reducer: combineReducers({
    form_daftar: daftarSlice,
    form_login: loginSlice,
    end_antrian: endAntrianSlice,
    request_admin: requestAdminSlice
  }),
});

export default { Store };
