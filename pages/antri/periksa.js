import React from "react";
import Navbar from '../../components/header/navbar';
import Backgound from "../../components/background/backgound";
import CekAntrian from "../../components/cek-antrian/cekAntrian";
import Head from "next/head";

function cekAntrian() {
    return (
        <>
            <Head>
                <title>Periksa dan Lanjutkan Antrian</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <CekAntrian />
        </>
    )
}

export default cekAntrian;