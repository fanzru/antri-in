import React from "react";
import Backgound from "../../../../components/background/backgound";
import Navbar from "../../../../components/header/navbar";
import InformationAntrian from "../../../../components/login-admin/InformationAntrian";
import Head from 'next/head'

function informationAntrian() {
    return (
        <>
            <Head>
                <title>Antrian</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <InformationAntrian />
        </>
    )
}

export default informationAntrian;