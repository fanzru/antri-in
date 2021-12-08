import React from "react";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import Createaccount from "../components/create-account/Createaccount";
import Head from "next/head";

function CreateAccout() {
  return (
    <>
      <Head>
        <title>Buat Akun Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Backgound />
      <Createaccount />
    </>
  );
}

export default CreateAccout;
