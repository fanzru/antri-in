import React from "react";
import Navbar from '../../components/header/navbar';
import Backgound from "../../components/background/backgound";
import CekAntrian from "../../components/cek-antrian/cekAntrian";

function cekAntrian() {
    return (
        <>
            <Navbar/>
            <Backgound/>
            <CekAntrian/>
        </>
    )
}

export default cekAntrian;