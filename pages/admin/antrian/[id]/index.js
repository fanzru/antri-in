import React from "react";
import Backgound from "../../../../components/background/backgound";
import Navbar from "../../../../components/header/navbar";
import InformationAntrian from "../../../../components/login-admin/InformationAntrian";


function informationAntrian(){
    return (
        <>
            <Navbar/>
            <Backgound/>
            <InformationAntrian/>
        </>
    )
}

export default informationAntrian;