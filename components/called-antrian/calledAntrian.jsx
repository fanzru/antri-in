import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { createToastWarning, createToastError, createToastSuccess, selectToast } from '../../redux/toastSlice'
import axios from "axios";
import Cookies from 'universal-cookie';
import {useRouter} from "next/router";


function CalledAntrian() {
  const dispatch = useDispatch(selectToast)
  const router = useRouter()
  const [dataAntrianNow, setDataAntrianNow] = useState("")
  const [Loading, setLoading] = useState(true);
  const cookie = new Cookies();
  const token = cookie.get("token_pengantri")

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
          setLoading(false)
          if (data.antrian.curr_antrian > data.no_antrian_pengantri) {
            dispatch(createToastWarning("Antrian anda sudah selesai"))
            router.push("/antri/selesai")
          } else if (data.antrian.curr_antrian < data.no_antrian_pengantri) {
            dispatch(createToastWarning("Anda masih harus menunggu antrian"))
            router.push("/antri/menunggu")
          }
        })
        .catch((e) => {
          router.push("/")
          dispatch(createToastError("Anda tidak masuk ke dalam antrian"))
        })
    } catch (e) {
      dispatch(createToastError("Tidak bisa melihat antrian terbaru"))
    }
  }

  const handleBatalAntrian = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("token_id", token);
    axios.delete(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/pengantri`, { data: bodyFormData })
      .then(res => {
        dispatch(createToastSuccess("Berhasil membatalkan antrain"))
        cookie.remove("token_pengantri")
        router.push("/antri/selesai")
      })
      .catch(err => {
        console.log(err)
        dispatch(createToastError("Tidak dapat membatalkan atrian, harap hubungi petugas antrian"))
        cookie.remove("token_pengantri")
        router.push("/")
      })
  }

  useEffect(() => {
    const interval = setInterval(getDataAntrianNow, 3000)
    return function cleanup() {
      clearInterval(interval)
    };
    // Melakukan cek antrian setiap 1 detik
  }, [])



  return (
    <div>
      <div className="flex items-center mx-8 justify-center h-screen">
        <div className="flex flex-col container items-center justify-center w-full md:max-w-sm ">
          <div className="flex w-full justify-center">
            <h1 className="text-3xl font-bold">Antrian Anda Dipanggil</h1>
          </div>

          <div className="flex flex-col py-5 mt-10 w-full justify-between mx-auto border rounded-xl shadow-md bg-red-200">
            <div className="flex justify-center font-semibold text-xl text-gray-500 ">
              <p>Antrian Saat ini</p>
            </div>
            {Loading ? (
              <div className="flex justify-center font-bold text-9xl">
                <p>--</p>
              </div>
            ) : (
              <div className="flex justify-center font-bold text-9xl">
                <p>{dataAntrianNow.antrian.curr_antrian}</p>
              </div>
            )
            }
          </div>

          <div className="flex flex-col justify-center mt-10 mb-16">
            <p className="text-center text-xs">Yeay antrian sudah sampai.</p>
            <p className="text-center text-xs text-red-500">Semoga harimu menyenangkan.</p>
          </div>
          
          <button onClick={handleBatalAntrian} className="flex mx-auto px-8 py-4 items-center justify-center mb-10 bg-red-500 rounded-md">
            <p className="text-white font-semibold text-xs">
              Batalkan Antrian
            </p>
          </button>

        </div>  
      </div>
    </div>
  )
}

export default CalledAntrian;