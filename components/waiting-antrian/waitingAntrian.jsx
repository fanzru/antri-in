import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { createToastError, createToastSuccess, createToastWarning, selectToast } from '../../redux/toastSlice'
import axios from "axios";
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";

function WaitingAntrian() {
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
          if (data.antrian.curr_antrian == data.no_antrian_pengantri) {
            router.push("/antri/dipanggil")
          } else if (data.antrian.curr_antrian > data.no_antrian_pengantri) {
            cookie.remove("token_pengantri")
            dispatch(createToastError("Anda tidak masuk ke dalam antrian"))
            router.push("/")
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
        dispatch(createToastError("Tidak dapat membatalkan atrian, harap hubungi petugas antrian"))
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
      <div className="flex mx-8 h-screen justify-center ">
        <div className="flex flex-col justify-center w-full md:max-w-sm">
          <div className="flex w-full justify-center">
            <h1 className="text-3xl font-bold">Antrian</h1>
          </div>
          {Loading ? (
            <div className="flex w-full justify-center">
              <h1 className="text-3xl font-bold">------------</h1>
            </div>
          ) : (
            <div className="flex w-full justify-center">
              <h1 className="text-3xl font-bold text-center">{dataAntrianNow.antrian.nama}</h1>
            </div>
          )}


          <div className="flex flex-col py-5 mt-10 w-full justify-between mx-auto border rounded-xl shadow-md bg-red-200">
            <div className="flex justify-center font-bold text-xl text-black ">
              <p>Antrian Saat ini</p>
            </div>
            {Loading ? (
              <div className="flex justify-center font-bold text-9xl">
                <p>--</p>
              </div>
            ) : (
              <div className="flex justify-center font-bold text-9xl">
                <p className="text-center">{dataAntrianNow.antrian.curr_antrian}</p>
              </div>
            )
            }
          </div>

          <div className="flex flex-col py-2 mt-8 w-full justify-between mx-auto rounded-xl shadow-md bg-red-200">
            <div className="flex justify-center font-semibold text-xl text-gray-500 k">
              <p>Antrian Anda</p>
            </div>
            {Loading ? (
              <div className="flex justify-center font-bold text-5xl">
                <p>-----------</p>
              </div>
            ) : (
              <div className="flex justify-center font-bold text-5xl">
                <p>{dataAntrianNow.no_antrian_pengantri}</p>
              </div>
            )}

          </div>

          <div className="flex flex-col justify-center mt-10 mb-16">
            <p className="text-center text-xs">Notigikasi akan muncul saat antrian sudah dekat.</p>
            <p className="text-center text-xs text-red-500">Jangan menutup browser agar mendapatkan notifikasi.</p>
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

export default WaitingAntrian;