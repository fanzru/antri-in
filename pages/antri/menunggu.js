import React from "react";
import Navbar from '../../components/header/navbar';
import Backgound from "../../components/background/backgound";
import WaitingAntrian from "../../components/waiting-antrian/waitingAntrian";
import Head from "next/head";

function waitingAntrian() {
    return (
        <>
            <Head>
                <title>Menunggu Antrian</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <WaitingAntrian />
        </>
    )

}

export default waitingAntrian;