import React from "react";
import AdminPage from "../../components/login-admin/AdminPage";
import Backgound from "../../components/background/backgound";
import Navbar from "../../components/header/navbar";
import Head from 'next/head'


function adminPage() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <AdminPage />
        </>
    )
}

export default adminPage;