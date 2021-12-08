import React from "react";
import Navbar from '../../components/header/navbar';
import Backgound from "../../components/background/backgound";
import EndAntrian from "../../components/end-antrian/endAntrian"
import Head from "next/head";

function calledAntrian() {
    return (
        <>
            <Head>
                <title>Antrian Anda Selesai</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <EndAntrian />
        </>
    )
}

export default calledAntrian;