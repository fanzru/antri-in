import React from "react";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import PindaiQRcode from "../components/pindaiQR/PindaiQRcode";
import Head from 'next/head'

function pindaiQR() {
    return (
        <>
            <Head>
                <title>Scan QR</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <PindaiQRcode />
        </>
    )
}

export default pindaiQR;