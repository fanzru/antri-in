import React from "react";
import AddPengatri from "../../../../components/login-admin/AddPengantri";
import Backgound from "../../../../components/background/backgound";
import Navbar from "../../../../components/header/navbar";
import Head from 'next/head'

function test() {
    return (
        <>
            <Head>
                <title>Tampah Pengantri</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <AddPengatri />
        </>
    )
}

export default test;