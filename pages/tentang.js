import React from "react";
import BackgroundAbout from "../components/background/backgroundAbout";
import Navbar from "../components/header/navbar";
import AboutYaUdahlah from "../components/about/AboutYaUdahlah";

function About(){
    return (
        <>
            <Navbar/>
            <AboutYaUdahlah/>
            <BackgroundAbout/>
        </>
    )
}


export default About;