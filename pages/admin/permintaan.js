import React from "react";
import RequestAdmin from "../../components/login-admin/RequestAdmin";
import Backgound from "../../components/background/backgound";
import Navbar from "../../components/header/navbar";

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