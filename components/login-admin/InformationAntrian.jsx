import React from "react";
import {BsFillPersonFill, BsPlusLg} from "react-icons/bs"

function InformationAntrian(){
    return(
        <div className='flex h-screen items-center justify-center'>
            <div className='w-3/4'>
                <div className='flex items-center md:justify-between justify-between py-5 px-5 md:px-20 gap-3 bg-red-400 md:rounded-3xl rounded-lg shadow-lg mb-10'>
                    <span className='font-semibold'>Customer Service Antrian A</span>
                    <a 
                        href=""
                        className='w-1/2 hidden md:block'
                    >
                        <div className='flex justify-between w-full items-center gap-3 bg-white py-3 px-10 rounded-md shadow-md'>
                            <span className='font-bold'>Tambah Antrian Manual</span>
                            <div className='flex items-center justify-center'>
                                <BsPlusLg/>
                            </div>        
                        </div>
                    </a>
                    <div className='flex items-center'>
                        <div>
                            <BsFillPersonFill/>
                        </div>
                        <span className='font-bold pl-1'>3</span>
                    </div>
                </div>
                <div className='md:grid md:grid-cols-3 gap-6 md:p-10 md:bg-gray-400 bg-none rounded-lg md:shadow-lg'>
                    <div className='md:order-last md:col-span-1'>
                        <div className='md:order-last mb-12 md:mb-0 bg-red-200 relative justify-center items-center rounded-xl shadow-lg'>
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
                    
                    <div className='bg-gray-400 md:bg-gray-400 md:col-span-2 p-5 md:p-0 rounded-2xl md:rounded-none shadow-lg md:shadow-none'>
                        {/* bagian Berikutnya */}
                        <div className='flex justify-between items-center p-3 bg-red-200 mb-3 rounded-lg shadow-md'>
                            <span className='font-semibold'>Nama Panjang</span>
                            <div className='flex gap-2'>
                                <button className='h-full py-1 px-2 bg-red-500 rounded-md shadow-md text-white'>Berikutnya</button>
                            </div>
                        </div>
                        {/* list lainnya */}
                        <div className='flex justify-between items-center p-3 bg-red-200 mb-3 rounded-lg shadow-md'>
                            <span className='font-semibold'>Nama Panjang</span>
                            <div className='flex gap-2'>
                                {/* <button className='h-full py-1 px-2 bg-white rounded-md shadow-md font-semibold'>Edit Antrian</button> */}
                                <button className='h-full w-8 bg-red-500 flex items-center justify-center rounded-md shadow-md'>
                                    <img src="rounded-x-button.svg" alt="x" srcset="" className='h-full p-2' />
                                </button>
                            </div>
                        </div>
                        
                        {/* tambah antrian manual */}
                        <a href=""
                            className='md:hidden block'
                        >
                            <div className='flex justify-between items-center bg-white p-3 rounded-lg shadow-md'>
                                <span className='font-bold'>Tambah Antrian Manual</span>
                                <div className='flex items-center justify-center'>
                                    <BsPlusLg/>
                                </div>        
                            </div>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationAntrian;