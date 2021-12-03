import React from "react";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import PindaiQRcode from "../components/pindaiQR/PindaiQRcode";

function pindaiQR(){
    return (
        <div>
            <Navbar/>
            <Backgound/>
            <PindaiQRcode/>
        </div>
    )
}

export default pindaiQR;