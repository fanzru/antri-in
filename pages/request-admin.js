import React from "react";
import RequestAdmin from "../components/login-admin/RequestAdmin";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import { Provider } from "react-redux";
import { Store } from "../redux/store";

function request_admin() {
    return (
        <>
            <Navbar />
            <Backgound />
            <RequestAdmin />
        </>
    )
}

export default request_admin;