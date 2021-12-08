import React from "react";
import { BsPlusLg } from "react-icons/bs"
import { useRouter } from "next/router";

export default function AddPengatri() {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-3/4'>
                <div className='flex items-center md:justify-center justify-between p-5 gap-3 bg-red-400 rounded-xl shadow-lg mb-10'>
                    <span className='font-semibold'>Customer Service Antrian A</span>
                    {/* <div className='flex items-center'>
                        <div>
                            <BsFillPersonFill/>
                        </div>
                        <span className='font-bold pl-1'>3</span>
                    </div> */}
                </div>
                <div className='md:grid md:grid-cols-3 gap-6 md:p-10 md:bg-gray-500 bg-none rounded-lg md:shadow-lg'>
                    <div className='md:order-last md:col-span-1'>
                        <div className='mb-12 md:mb-0 bg-red-200 relative justify-center items-center rounded-xl shadow-lg'>
                            <div className='grid place-items-center pt-5'>
                                <span className='font-semibold'>Antrian Saat Ini</span>
                                <div className='pb-12 pt-2'>
                                    <span className='text-8xl font-bold'>XXX</span>
                                </div>
                                <div className='absolute -bottom-8'>
                                    <button className='bg-red-500 p-5 text-white rounded-xl font-semibold'>Berikutnya</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-400 md:bg-red-200 col-span-2 p-5 rounded-2xl shadow-lg'>
                        {/* Form nama input */}
                        <div className=''>
                            <form className='md:grid md:grid-cols-2 md:gap-6' action="">
                                <div className=''>
                                    {/* Nomor Antrian Selanjutnya */}
                                    <div className='grid md:place-items-start place-items-center mb-6 md:mb-0'>
                                        <div className='flex justify-between items-center gap-8 px-2 mb-3 text-xs text-white py-2 bg-gray-500 rounded-lg shadow-lg'>
                                            <span className='font-semibold'>Nomor Antrian Selanjutnya</span>
                                            <span className='font-semibold'>XXX</span>
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <input className='font-bold rounded-lg shadow-lg h-full w-full py-3 px-2 placeholder-black focus:outline-none' type="text" name="" id="" placeholder='Nama Pengantri' />
                                    </div>
                                    <div className='mb-3 '>
                                        <input className='font-bold rounded-lg shadow-lg h-full w-full py-3 px-2 placeholder-black focus:outline-none' type="text" name="" id="" placeholder='No. Telp Pengantri' />
                                    </div>
                                </div>

                                <div className='mt-16 md:mt-0'>
                                    <div className='bg-white hidden md:flex flex-col justify-center items-center px-5 py-10 rounded-lg shadow-lg mb-5'>
                                        <span className='font-semibold'>NAMA ANTRIAN</span>
                                        <span className='text-justify mb-4'>Deskripsi Antrian</span>
                                        <span className='font-semibold'>TOTAL ANTRIAN</span>
                                        <span className='font-semibold'>SAAT INI</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button className='md:text-sm flex justify-between items-center w-full bg-white p-3 rounded-lg shadow-md'>
                                            <span className='md:order-last font-bold'>Tambah Antrian Manual</span>
                                            <div className='flex items-center justify-center'>
                                                <BsPlusLg />
                                            </div>
                                        </button>
                                        <button className='hidden md:flex w-20 bg-red-500 items-center justify-center rounded-md shadow-md'>
                                            <img src="rounded-x-button.svg" alt="x" srcset="" className='h-full p-2' />
                                        </button>
                                    </div>

                                </div>


                            </form>
                            {/* <span className='font-semibold'>Nama Panjang</span>
                            <div className='flex gap-2'>
                                <button className='h-full py-1 px-2 bg-white rounded-md shadow-md font-semibold'>Edit Antrian</button>
                                <button className='h-full w-8 bg-red-500 flex items-center justify-center rounded-md shadow-md'>
                                    <img src="rounded-x-button.svg" alt="x" srcset="" className='h-full p-2' />
                                </button>
                            </div> */}
                        </div>
                        {/* tambah antrian manual */}
                        {/* <div className='flex justify-between items-center bg-white p-3 rounded-lg shadow-md'>
                            <span className='font-bold'>Tambah Antrian Manual</span>
                            <div className='flex items-center justify-center'>
                                <BsPlusLg/>
                            </div>        
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}