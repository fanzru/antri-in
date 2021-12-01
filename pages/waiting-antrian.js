import React from "react";
import Navbar from '../components/header/navbar';
import Backgound from "../components/background/backgound";
import WaitingAntrian from "../components/waiting-antrian/waitingAntrian";

function waitingAntrian() {
    return (
        <>
            <Navbar/>
            <Backgound/>
            <WaitingAntrian/>
        </>
    )

}

export default waitingAntrian;