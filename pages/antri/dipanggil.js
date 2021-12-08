import React from "react";
import Navbar from '../../components/header/navbar';
import Backgound from "../../components/background/backgound";
import CalledAntrian from "../../components/called-antrian/calledAntrian"
import Head from "next/head";

function calledAntrian() {
    return (
        <>
            <Head>
                <title>Anda Dipanggil!</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <CalledAntrian />
        </>
    )
}

export default calledAntrian;