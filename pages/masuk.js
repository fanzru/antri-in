import React, {useEffect} from "react";
import LoginAdmin from "../components/login-admin/Login-Admin";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import Head from 'next/head'
import Cookies from 'universal-cookie';
import {useRouter} from "next/router";

function loginAdmin() {
  const cookie = new Cookies()
  const router = useRouter()
  useEffect(() => {
    let tokenData = cookie.get("token_admin")
    if (tokenData) {
      router.push('/admin')
    }
  }, [])
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
