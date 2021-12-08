import React from "react";
import LoginAdmin from "../components/login-admin/Login-Admin";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import Head from 'next/head'

function loginAdmin() {
  return (
    <>
      <Head>
        <title>Masuk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Backgound />
      <LoginAdmin />
    </>
  );
}

export default loginAdmin;
