import React from "react";
import IsiDataAntrian from "../components/login-admin/IsiDataAntrian";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";

function AddAntrian(){
    return (
        <>
            <Navbar/>
            <Backgound/>
            <IsiDataAntrian/>
        </>
    )
}

export default AddAntrian;