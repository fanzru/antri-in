import React from "react";
import Navbar from '../components/header/navbar';
import Backgound from "../components/background/backgound";
import CalledAntrian from "../components/called-antrian/calledAntrian"

function calledAntrian() {
    return (
        <div className='font-poppins'>
            <Navbar/>
            <Backgound/>
            <CalledAntrian/>
        </div>
    )
}

export default calledAntrian;