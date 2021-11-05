import {createSlice} from '@reduxjs/toolkit'

const navBarSlice = createSlice({
  name: 'navbar',
  initialState: {
    status: false,
  },
  reducers: {
    changeNavbar: (state,action) => {
      state.status = action.payload;
    },
  },
});

export const {changeNavbar} = navBarSlice.actions;

export const selectNavbarStatus = state => state.navbar.status;

export default navBarSlice.reducer;