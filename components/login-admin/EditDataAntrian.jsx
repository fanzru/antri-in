import React, { useState, useEffect } from "react";
// import Navbar from "../header/navbar";
// import Backgound from "../background/backgound";
// import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image"
import { ReactComponent as BrandIcon } from "../../public/ilus-antri01.svg";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie';
import { useDispatch } from "react-redux";
import { createToastSuccess, createToastWarning, selectToast, createToastError } from "../../redux/toastSlice";

function EditDataAntrian(props) {

    const cookie = new Cookies()

    const router = useRouter()
    const [deskripsi, setDeskripsi] = useState("")
    const [nama, setNama] = useState("")
    const dispatch = useDispatch(selectToast)
    const [DataAntrian, setDataAntrian] = useState(null)
    const token = cookie.get("token_admin");

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian?id=${router.query.id}`)
            .then(res => {
                setDataAntrian(res.data.data)
            })
            .catch(e => {
                dispatch(createToastError("Gagal mengambil data antrian"))
                router.push("/admin/")
            })
    }, [])


    const handleClick = (e) => {
        const id = props.data.id;
        e.preventDefault()
        var config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        var bodyFormData = new FormData();
        bodyFormData.append("nama", nama);
        bodyFormData.append("deskripsi", deskripsi);

        if ((!nama) || (!deskripsi)) {
            // buat kalau dia inputan kosong salah satu kosong
            dispatch(createToastWarning("Nama dan Deskripsi harus diisi"))
            // suruh lengkapin aja toastnya
            console.log("gaboleh disubmite")
        } else {
            axios
                .put(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/antrian?id=${id}`,
                    bodyFormData,
                    config)
                .then((res) => {
                    router.push("/admin/")
                    dispatch(createToastSuccess("Berhasil merubah data antrian"))
                })
                .catch((err) => {
                    // antrian edit gagal tampilkan toast
                    dispatch(createToastError("Gagal merubah data antrian"))
                    console.log(err)
                    router.push("/admin/")
                })
        }


    }
    return (
        <div className="fixed w-screen h-screen">
            <div className='md:grid md:grid-cols-5 place-items-center py-28 pl-10 pr-5'>
                <div className="h-full md:col-span-3 hidden md:block">
                    <Image src="/ilus-antri01.svg" height={350} width={600} />
                </div>
                <div className="md:col-span-2 px-5 md:px-20 pt-11 w-full md:h-full">
                    <span className="text-2xl font-bold">
                        <p>
                            Edit Data Antrian
                        </p>
                        <p>
                            {DataAntrian != null && DataAntrian.nama}
                        </p>
                    </span>
                    <form action="" className='pt-5'>
                        <label
                            htmlFor=""
                            className="block text-sm text-gray-500 mb-2"
                        >Nama Antrian</label>
                        <input
                            type="text"
                            name="nama"
                            id=""
                            placeholder="Masukkan Nama Antrian"
                            className='block w-full bg-red-200 rounded-lg shadow-lg placeholder-gray-600 p-3 mb-3'
                            onChange={(e) => setNama(e.target.value)}
                        />
                        <label
                            htmlFor=""
                            className="block text-sm text-gray-500 mb-2"
                        >Deskripsi Antrian</label>
                        <textarea
                            name="deskripsi"
                            type="text"
                            id=""
                            placeholder='Masukkan Deskripsi Antrian'
                            className='resize-none h-32 block w-full bg-red-200 rounded-lg shadow-lg placeholder-gray-600 p-3'
                            onChange={(e) => setDeskripsi(e.target.value)}
                            value={deskripsi}
                        ></textarea>
                        <div className='flex items-center justify-center mt-10'>
                            <button
                                type="submit"
                                className="flex items-center justify-center px-6 py-2 bg-red-500 rounded-lg h-10 w-28 text-white"
                                onClick={handleClick}
                            >Ubah
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditDataAntrian;