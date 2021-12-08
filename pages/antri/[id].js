import React, { useState, useEffect } from "react";
import JoinAntrian from "../../components/join-antrian/joinAntrian";
import Navbar from "../../components/header/navbar";
import Backgound from "../../components/background/backgound";
import { useRouter } from "next/router"
import axios from "axios"
//import { createToast, selectToast } from '../redux/toastSlice'
import Head from "next/head";

function joinAntrian(props) {
  const router = useRouter()

  const [dataAntrian, setDataAntrian] = useState("")
  const data = router.query
  const getAntrian = (data) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian?id=${data.id}`)
      .then((res) => {
        const detailAntrian = res.data.data;
        setDataAntrian(detailAntrian);
      })
      .catch((e) => {
        router.push("/")
        console.log(e);
      });
  };

  useEffect(() => {
    if (data) {
      getAntrian(data)
    }
  }, [data]);


  return (
    <div>
      <Head>
        <title>Masuk ke dalam antrian</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Backgound />
      <JoinAntrian data={dataAntrian} />
    </div>
  );
}

export default joinAntrian;