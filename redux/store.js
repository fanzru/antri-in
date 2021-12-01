import daftarSlice from "./daftarSlice";
import loginSlice from "./loginSlice";
import endAntrianSlice from "./endAntriSlice"
import requestAdminSlice from "./requestAdmin"
import toastSlice from "./toastSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const GlobalStore = configureStore({
  reducer: combineReducers({
    toast: toastSlice,
    form_daftar: daftarSlice,
    form_login: loginSlice,
    end_antrian: endAntrianSlice,
    request_admin: requestAdminSlice
  })
})

export default { GlobalStore };
