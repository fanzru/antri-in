import React from "react";
import RequestAdmin from "../components/login-admin/RequestAdmin";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import { Provider } from "react-redux";
import { Store } from "../redux/store";

function request_admin() {
    return (
        <Provider store={Store}>
            <div>
                <Navbar/>
                <Backgound/>
                <RequestAdmin />
            </div>
        </Provider>

    )
}

export default request_admin;