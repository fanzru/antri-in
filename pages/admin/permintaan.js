import React from "react";
import RequestAdmin from "../../components/login-admin/RequestAdmin";
import Backgound from "../../components/background/backgound";
import Navbar from "../../components/header/navbar";
import Head from 'next/head'

function request_admin() {
    return (
        <>
            <Head>
                <title>Permintaan bergabung</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <RequestAdmin />
        </>
    )
}

export default request_admin;