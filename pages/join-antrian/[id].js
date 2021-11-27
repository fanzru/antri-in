import React, {useState, useEffect} from "react";
import JoinAntrian from "../../components/join-antrian/joinAntrian";
import Navbar from "../../components/header/navbar";
import Backgound from "../../components/background/backgound";
import {useRouter} from "next/router"
import  axios from "axios"
import { useDispatch } from 'react-redux'
import { createToast, selectToast } from '../../redux/toastSlice'


function joinAntrian(props) {
  const router = useRouter()
  // var cookie = require('cookie-cutter');
  // const router = useRouter()
  // const dispatch = useDispatch(selectToast)
  // const tokenData = cookie.get("token_pengantri")
  
  // if (tokenData) {
  //   axios
  //   .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/trace`,{
  //     headers: {
  //       Authorization: `Bearer ${tokenData}`
  //     }
  //   })
  //   .then((res)=> {
  //     dispatch(createToast("Selesaikan Antrian Anda"))
  //     //router.push("/waiting-antrian")
  //   })
  //   .catch((e) => {
  //     console.log(e)
  //   })  
  // }

  const [dataAntrian, setDataAntrian] = useState("")
  const data = router.query
  const getAntrian =(data) => {
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
      <Navbar />
      <Backgound />
      <JoinAntrian data={dataAntrian} />
    </div>
  );
}

export default joinAntrian;