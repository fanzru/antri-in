import router from 'next/router';
import React,{ useState,useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { createToast, selectToast } from '../../redux/toastSlice'
import axios from "axios";
function WaitingAntrian(props) {
  const dispatch = useDispatch(selectToast)
  
  const [dataAntrianNow, setDataAntrianNow] = useState("")
  const [Loading, setLoading] = useState(true);
  const getDataAntrianNow = () => {
    
    var cookie = require("cookie-cutter");
    const token = cookie.get("token_pengantri")

    axios
    .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/trace`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=> {
      const data = res.data.data
      console.log("-------------------",data)
      setDataAntrianNow(data)
      setLoading(false)
    })
    .catch((e) => {
        console.log(e)
        router.push("/")
        dispatch(createToast("Tidak Ada Antrian"))
    })
  }

  useEffect(() => {
    getDataAntrianNow()
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
          ):(
            <div className="flex w-full justify-center">
              <h1 className="text-3xl font-bold">{dataAntrianNow.antrian.nama}</h1>
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
              ):(
                <div className="flex justify-center font-bold text-9xl">
                <p>{dataAntrianNow.antrian.curr_antrian}</p>
                </div> 
              )
            }
          </div>

          <div className="flex flex-col py-2 mt-8 w-full justify-between mx-auto rounded-xl shadow-md bg-red-200">
            <div className="flex justify-center font-semibold text-xl text-gray-500 k">
              <p>Antrian Anda</p>
            </div>
            {Loading? (
              <div className="flex justify-center font-bold text-5xl">
                <p>-----------</p>
              </div>
            ):(
              <div className="flex justify-center font-bold text-5xl">
                <p>{dataAntrianNow.no_antrian_pengantri}</p>
              </div>
            )}
            
          </div>

          <div className="flex flex-col justify-center mt-10 mb-16">
            <p className="text-center text-xs">Notigikasi akan muncul saat antrian sudah dekat.</p>
            <p className="text-center text-xs text-red-500">Jangan menutup browser agar mendapatkan notifikasi.</p>
          </div>

          <div className="flex mx-auto px-8 py-4 items-center justify-center mb-10 bg-red-500 rounded-md">
            <button className="text-white font-semibold text-xs">
              Batalkan Antrian
            </button>
          </div>
        </div>
      </div>
        
        
    </div>
  )
}

export default WaitingAntrian;