import React, { useState } from 'react'
import { BsFillPersonFill, BsPencilFill, BsPlus } from "react-icons/bs";
import Cookies from 'universal-cookie';
import Modal, { DefaultModalData } from '../modal/Modal'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { createToastError, createToastSuccess, selectToast } from '../../redux/toastSlice';
import {useRouter} from "next/router";
function ListAntrianAdmin(props) {
    const router = useRouter()
    const cookie = new Cookies();
    let token = cookie.get("token_admin")
    const role = ""
    if (token) {
        role = JSON.parse(atob(token.split('.')[1]))["role"]
    }
    const [ShowModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(DefaultModalData)
    const data = props.data;
    const dispatch = useDispatch(selectToast)

    const handleTambahNomor = () => {
        /// Setup modal
        modalData.message = "Apakah anda yakin untuk menambah nomor antrian " +data.nama // Must
    
        modalData.acceptMessage = "Iya" // Optional
        modalData.onAccept = async () => { // Must if acceptMessage is not empty
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            }
          await axios.post(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/tambah?id=${data._id}`, {}, config)
            .then(res => {
              dispatch(createToastSuccess("Berhasil menambahkan nomor antrian"))
            })
            .catch(err => {
                dispatch(createToastError("Gagal menambahkan nomor antrian"))
            })
          setShowModal(false) // Kalau mau ditutup setelah di klik,harus tambahin ini
        }
    
        modalData.declineMessage = "Tidak" // Optional
        modalData.onDecline = () => {  // Must if declineMessage is not empty
          setShowModal(false) // Kalau mau ditutup setelah di klik, harus tambahin ini
        }
        setModalData(modalData)
        setShowModal(true)
      }
      
    return (
        <>
            <Modal modalData={modalData} show={ShowModal} />
            <div className="mb-3 md:mb-6">
                <div className="flex md:px-8 px-4 py-8 justify-between h-20 place-items-center bg-red-400 rounded-full md:rounded-3xl shadow-xl">
                    <span className="font-semibold text-sm w-full mr-10">{data.nama}</span>
                    <div className="flex gap-2 h-10 md:gap-8">
                        {(role == "super") ? <button className="bg-white rounded-lg inline-flex items-center" onClick={()=>{router.push(`/admin/edit/${data._id}`)}}>
                            <div
                                className='font-bold flex gap-3 px-2'
                            >
                                <span className='hidden md:inline pt-2 text-xs'>Edit </span>
                                <div className='p-2'>
                                    <BsPencilFill />
                                </div>
                            </div>
                        </button> : <button onClick={handleTambahNomor} className="bg-white rounded-lg inline-flex items-center">
                            <div
                                className='font-bold flex gap-3 px-2'
                            >
                                <span className='hidden md:inline pt-2 text-xs truncate'>Nomor Selanjutnya</span>
                                <div className='p-2'>
                                    <BsPlus size={16} />
                                </div>
                            </div>
                        </button>}

                        <button className="bg-white rounded-lg md:rounded-md inline-flex items-center">
                            <div
                                className='font-semibold flex items-center justify-center w-12'
                            >
                                <div className='mr-1'>
                                    <BsFillPersonFill />
                                </div>
                                <span className='text-sm'>{data.max_antrian - data.curr_antrian}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListAntrianAdmin;
