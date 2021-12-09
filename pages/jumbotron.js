import React from "react";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import Head from 'next/head';
import Jumbo from "../components/jumbotron/Jumbo";


function jumbotron(){
    return(
        <div>
            <Head>
                <title>Jumbotron Antri.In</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <Backgound/> 
            <Jumbo/>
        </div>
    )
}

export default jumbotron;