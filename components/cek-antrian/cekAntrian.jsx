import React, {useState} from 'react';
import { BsTelephone } from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai"
import { selectToast, createToastError, createToastSuccess, createToastWarning } from '../../redux/toastSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {trimSpace} from "../../utils/helper/trimSpace"
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

function CekAntrian(props) {
  const dispatch = useDispatch(selectToast)
  const cookie = new Cookies()
  const [NomorTelepon, setNomorTelepon] = useState("")
  const router = useRouter()

  const handleCek = (e) => {
    e.preventDefault()
    if (trimSpace(NomorTelepon) == ""){
      dispatch(createToastWarning("Nomor telepon tidak boleh kosong"))
    }
    axios.get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/pengantri?telp=${NomorTelepon}`).then(res => {
      let data = res.data.data
      cookie.set("token_pengantri", data.token)
      dispatch(createToastSuccess("Melanjutkan antrian"))
      router.push("/antri/menunggu")
    }).catch(err => {
      dispatch(createToastError("Nomor telepon tidak ditemukan, kembali ke laman awal"))
      router.push("/")
    })
  }

  return (
    <div className="flex flex-col mx-2 h-screen items-center justify-center">      
      
      <div className=" w-full md:w-1/3 px-10">
        <p className="text-xl text-left font-semibold ">Lanjutkan Antrian</p>
        <p className="text-sm text-left text-gray-500">Gunakan nomor telepon yang didaftarkan untuk melanjutkan antrian anda.</p>
        <div className="flex mt-4">
          <p className="text-sm text-left text-gray-500">Nomor Telepon</p>
          <p className="text-sm text-left text-red-500">*</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:w-1/3 mt-1 px-10">
        <div className="flex rounded-lg shadow-lg w-full">
          <div className="inline-flex items-center px-3 rounded-l-lg bg-red-100 text-gray-500 text-sm">
              <BsTelephone />
          </div>
          <input
              onChange={(e) => {setNomorTelepon(e.target.value)}}
              type="text"
              className="p-2 h-10 focus:outline-none focus:border-indigo-500 placeholder-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-l-2 border-gray-300 bg-red-100"
              placeholder="081XXXXXXXXX"
          />
        </div>
      </div>
    
      <button onClick={handleCek} className="flex mt-5 px-6 py-2 items-center justify-center bg-red-400 rounded-md hover:bg-red-500 hover:text-white">
        <div className="flex items-center font-bold text-xs text-white">
          <p className="px-1">Lanjutkan Antrian</p>
          <AiOutlineArrowRight/>
        </div>
        </button>
    </div>
  )
}

export default CekAntrian;