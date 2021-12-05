import React, {useState, useEffect} from "react";
import EditDataAntrian from "../../../components/login-admin/EditDataAntrian";
import Backgound from "../../../components/background/backgound";
import Navbar from "../../../components/header/navbar";
import {useRouter} from "next/router"
import  axios from "axios"

function edit(props) {
  const router = useRouter()

  const [dataAntrian, setDataAntrian] = useState("")
  const data = router.query
 
  const getAntrian =(data) => {
    console.log("----------------------------",data.id)
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
    console.log("---", data)
    try {
      if (data.id) {
        getAntrian(data)
      }
    } catch (e) {
    }

  }, [data]);
    return (
      <>
        <Navbar/>
        <Backgound/>
        <EditDataAntrian/>
      </>

    )
}

export default edit
