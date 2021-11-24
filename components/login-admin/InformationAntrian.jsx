import React from "react";
import {BsFillPersonFill, BsPlusLg} from "react-icons/bs"

function InformationAntrian(){
    return(
        <div>
            <div className='pt-8 px-10'>
                <div className='flex items-center justify-between p-3 bg-red-400 rounded-xl shadow-lg mb-10'>
                    <span className='font-semibold'>Customer Service Antrian B</span>
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
                <div className='bg-gray-600 p-5 rounded-2xl shadow-lg'>
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
                            <button className='h-full py-1 px-2 bg-white rounded-md shadow-md font-semibold'>Edit Antrian</button>
                            <button className='h-full w-8 bg-red-500 flex items-center justify-center rounded-md shadow-md'>
                                <img src="rounded-x-button.svg" alt="x" srcset="" className='h-full p-2' />
                            </button>
                        </div>
                    </div>
                    {/* tambah antrian manual */}
                    <div className='flex justify-between items-center bg-white p-3 rounded-lg shadow-md'>
                        <span className='font-bold'>Tambah Antrian Manual</span>
                        <div className='flex items-center justify-center'>
                            <BsPlusLg/>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationAntrian;