import React from "react";
import IsiDataAntrian from "../../../components/login-admin/IsiDataAntrian";
import Backgound from "../../../components/background/backgound";
import Navbar from "../../../components/header/navbar";
import Head from 'next/head'

function AddAntrian() {
    return (
        <>
            <Head>
                <title>Tambah Antrian</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <IsiDataAntrian />
        </>
    )
}

export default AddAntrian;