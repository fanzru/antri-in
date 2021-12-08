import React, { useEffect } from "react";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import { useRouter } from "next/router";
import Head from "next/head";

function Custom404() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <>
      <Head>
        <title>404: Laman Tidak Ditemukan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Backgound />
      <div className="fixed flex flex-col justify-center items-center w-screen h-screen select-none">
        <img src="/ilus-antrian-selesai.svg" height={239} width={255} />
        <div className="text-center flex flex-col justify-center">
          <p className="flex flex-row text-[70px] font-bold justify-center">
            <p className="text-red-500">4</p>
            <p>0</p>
            <p className="text-red-500">4</p>
          </p>
          <p>Laman Tidak Ditemukan</p>
          <p>kembali ke laman awal</p>
        </div>
      </div>
    </>
  );
}

export default Custom404;
