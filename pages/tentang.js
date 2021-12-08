import React from "react";
import BackgroundAbout from "../components/background/backgroundAbout";
import Navbar from "../components/header/navbar";
import AboutYaUdahlah from "../components/about/AboutYaUdahlah";
import Head from 'next/head'

function About() {
    return (
        <>
            <Head>
                <title>Tentang Antri.In</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <AboutYaUdahlah />
            <BackgroundAbout />
        </>
    )
}


export default About;