import React from "react";
import LoginAdmin from "../components/login-admin/Login-Admin";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import { Provider } from "react-redux";
import { Store } from "../redux/store";

function loginAdmin() {
  return (
      <>
        <Navbar/>
        <Backgound/>
        <LoginAdmin />
      </>
  );
}

export default loginAdmin;
