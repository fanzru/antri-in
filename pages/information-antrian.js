import React from "react";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import InformationAntrian from "../components/login-admin/InformationAntrian";


function informationAntrian(){
    return (
        <div>
            <Navbar/>
            <Backgound/>
            <InformationAntrian/>
        </div>
    )
}

export default informationAntrian;