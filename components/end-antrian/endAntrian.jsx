import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { createToastError, createToastWarning, selectToast } from '../../redux/toastSlice'
import axios from "axios";
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";
import Image from 'next/image'

function EndAntrian(props) {
  const dispatch = useDispatch(selectToast)
  const [dataAntrianNow, setDataAntrianNow] = useState("")
  const [Loading, setLoading] = useState(true);
  const cookie = new Cookies();
  const token = cookie.get("token_pengantri")

  const router = useRouter()
  const [AntriAgain, setAntriAgain] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/")
  }
  const handleNoClick = (e) => {
    e.preventDefault()
    setAntriAgain(true)
  }

  const getDataAntrianNow = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/trace`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          const data = res.data.data
          setDataAntrianNow(data)
          if (data.antrian.nama == "") {
            dispatch(createToastError("Anda tidak masuk ke dalam antrian"))
            cookie.remove("token_pengantri")
            router.push("/")
          }
          setLoading(false)
          if (data.antrian.curr_antrian == data.no_antrian_pengantri) {
            router.push("/antri/dipanggil")
          } else if (data.antrian.curr_antrian < data.no_antrian_pengantri) {
            dispatch(createToastWarning("Anda masih dalam antrian"))
            router.push("/antri/menunggu")
          } else {
            cookie.remove("token_pengantri")
          }
        })
        .catch((e) => {
        })
    } catch (e) {
      dispatch(createToastError("Tidak bisa melihat antrian terbaru"))
    }
  }

  useEffect(() => {
    const interval = setInterval(getDataAntrianNow, 3000)
    return function cleanup() {
      clearInterval(interval)
    };
    // Melakukan cek antrian setiap 1 detik
  }, [])

  const ButtonAgain = () => {
    return AntriAgain ? (
      <div>
        <div className="mt-8">
          <p className="font-bold text-red-500">Terimakasih sudah mengantri</p>
        </div>
      </div>
    ) : (
      <div>
        <div className="mt-8">
          <p className="text-center font-bold text-black">Ingin mengantri lagi?</p>
        </div>
      
        <div className="flex justify-between py-2 px-4 gap-4 mt-4">
          <button onClick={handleClick}  className="flex px-8 py-2 items-center justify-center bg-red-500 rounded-md hover:bg-red-600">
            <div className="text-white font-bold text-xs">
              Ya
            </div>
          </button>
          <button onClick={handleNoClick} className="flex px-6 py-2 items-center justify-center bg-red-100 rounded-md hover:bg-red-500 hover:text-white">
            <div  className="font-bold text-xs ">
              Tidak
            </div>
          </button>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <div className="flex items-center mx-8 justify-center h-screen">
        <div className="flex flex-col items-center justify-center w-full md:max-w-sm ">
          
          <div className="flex w-full justify-center">
            <h1 className="text-3xl font-bold">Antrian Selesai!</h1>
          </div>
          
          <div className="mt-6">
            <Image src="/ilus-antrian-selesai.svg" height={239} width={255} />
            {/* <img src="ilus-antrian-selesai.svg" alt="" /> */}
          </div>
          <ButtonAgain href={"/"} />
        </div>
      </div>
    </div>
  )
}

export default EndAntrian