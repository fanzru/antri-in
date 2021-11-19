import React from "react";
import LoginAdmin from "../components/login-admin/Login-Admin";
import { Provider } from "react-redux";
import { Store } from "../redux/store";

function loginAdmin() {
  return (
    <Provider store={Store}>
      <div className="font-poppins">
        <LoginAdmin />
      </div>
    </Provider>
  );
}

export default loginAdmin;
