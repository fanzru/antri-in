import React from "react";
import AdminPage from "../components/login-admin/AdminPage";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";


function adminPage(){
    return (
        <div className='font-poppins'>
            <Navbar/>
            <Backgound/>
            <AdminPage/>
        </div>
    )
}

export default adminPage;