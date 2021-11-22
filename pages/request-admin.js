import React from "react";
import RequestAdmin from "../components/login-admin/RequestAdmin";
import { Provider } from "react-redux";
import { Store } from "../redux/store";

function request_admin() {
    return (
        <Provider store={Store}>
            <div>
                <RequestAdmin />
            </div>
        </Provider>

    )
}

export default request_admin;