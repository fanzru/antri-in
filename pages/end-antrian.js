import React from "react";
import Navbar from '../components/header/navbar';
import Backgound from "../components/background/backgound";
import EndAntrian from "../components/end-antrian/endAntrian"

function calledAntrian() {
    return (
        <div className='font-poppins'>
            <Navbar/>
            <Backgound/>
            <EndAntrian/>
        </div>
    )
}

export default calledAntrian;