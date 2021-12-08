import React from "react";
import LoginAdmin from "../components/login-admin/Login-Admin";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";

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
