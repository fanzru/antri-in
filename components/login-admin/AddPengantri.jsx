import React from "react";
import {BsFillPersonFill, BsPlusLg} from "react-icons/bs"

export default function AddPengatri(){
    return (
        <div>
            <div className='pt-8 px-10'>
                <div className='flex items-center justify-between p-3 bg-red-400 rounded-xl shadow-lg mb-10'>
                    <span className='font-semibold'>Customer Service Antrian A</span>
                    <div className='flex items-center'>
                        <div>
                            <BsFillPersonFill/>
                        </div>
                        <span className='font-bold pl-1'>3</span>
                    </div>
                </div>
                <div className='mb-12 bg-red-200 relative justify-center items-center rounded-xl shadow-lg'>
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
                <div className='bg-gray-400 p-5 rounded-2xl shadow-lg'>
                    {/* Nomor Antrian Selanjutnya */}
                    <div className='grid place-items-center mb-6'>
                        <div className='flex justify-between items-center gap-8 px-2 text-xs text-white py-2 bg-gray-500 mb-3 rounded-lg shadow-md'>
                            <span className='font-semibold'>Nomor Antrian Selanjutnya</span>
                            <span className='font-semibold'>XXX</span>
                        </div>
                    </div>
                    {/* Form nama input */}
                    <div className='flex mb-4'>
                        <form className='w-full' action="">
                            <div className='mb-3'>
                                <input className='font-bold rounded-lg shadow-lg h-full w-full py-3 px-2 placeholder-black focus:outline-none' type="text" name="" id="" placeholder='Nama Pengantri'/>
                            </div>
                            <div className='mb-3 '>
                                <input className='font-bold rounded-lg shadow-lg h-full w-full py-3 px-2 placeholder-black focus:outline-none' type="text" name="" id="" placeholder='No. Telp Pengantri'/>
                            </div>
                            <div className='mt-16'>
                                <button className='flex justify-between items-center w-full bg-white p-3 rounded-lg shadow-md'>
                                    <span className='font-bold'>Tambah Antrian Manual</span>
                                    <div className='flex items-center justify-center'>
                                        <BsPlusLg/>
                                    </div>    
                                </button>
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
    )
}