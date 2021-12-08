import React from "react";
import EditDataAntrian from "../../../../components/login-admin/EditDataAntrian";
import Backgound from "../../../../components/background/backgound";
import Navbar from "../../../../components/header/navbar";
import Head from 'next/head'

function EditAntrian() {
    return (
        <>
            <Head>
                <title>Edit Antrian</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <EditDataAntrian />
        </>
    )
}

export default EditAntrian;