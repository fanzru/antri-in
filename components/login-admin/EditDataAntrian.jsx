import React from "react";
// import Navbar from "../header/navbar";
// import Backgound from "../background/backgound";
// import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image"
import { ReactComponent as BrandIcon } from "../../public/ilus-antri01.svg";

function EditDataAntrian(){
    return (
        <div className="fixed w-screen h-screen">
            <div className='md:grid md:grid-cols-5 place-items-center py-28 pl-10 pr-5'>
                <div className="h-full md:col-span-3 hidden md:block">
                    <Image src="/ilus-antri01.svg" height={350} width={600} />
                </div>
                <div className="md:col-span-2 px-5 md:px-20 pt-11 w-full md:h-full">
                    <span className="text-2xl font-bold">Edit Data Antrian</span>
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
                        />
                        <label 
                            htmlFor=""
                            className="block text-sm text-gray-500 mb-2"
                        >Deskripsi Antrian</label>
                        <textarea 
                            name="" 
                            id="" 
                            placeholder='Masukkan Deskripsi Antrian'
                            className='resize-none h-32 block w-full bg-red-200 rounded-lg shadow-lg placeholder-gray-600 p-3'
                        ></textarea>
                        <div className='flex items-center justify-center mt-10'>
                            <button 
                                type="submit"
                                className="flex items-center justify-center px-6 py-2 bg-red-500 rounded-lg h-10 w-28 text-white"
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