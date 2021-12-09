import React from "react";

export default function Jumbo(){
    const TempNomor = [
        {
          Nomor : '001',
        },
        {
          Nomor : '002',
        },
        {
          Nomor : '003',
        },
    ];
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='grid gap-y-5 w-3/4'>
                <div className='bg-red-300 p-10 rounded-2xl shadow-lg'>
                    <span className='ml-10 font-semibold text-xl'>ANTRIAN NGAMBIL KTM</span>
                </div>
                <div className='bg-gray-400 p-14 rounded-2xl shadow-lg'>
                    <div className='grid grid-cols-3 gap-x-8'>
                        {/* List Nomor Antrian */}
                        <div className='col-span-2 mx-10 relative'>
                            {TempNomor.length != 0 ? TempNomor.map((Nomor,Index)=>{
                                return (
                                    <div className='bg-red-500 p-8 mb-5 grid place-items-center rounded-2xl'>
                                        <div className={
                                            Index === 0 ? 'absolute -top-6' : 'hidden'}>
                                            <div className='bg-gray-800 flex justify-center px-5 py-3 rounded-xl'>
                                                <span className='font-bold text-white'>
                                                    Berikutnya
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <span className='font-semibold'>
                                            ANTRIAN KE-{Nomor.Nomor}
                                        </span>
                                    </div>
                                );
                            }) : <div className="text-center select-none font-bold pt-4">Antrian Tidak Tersedia</div>}
                            
                        </div>
                        {/* Antrian Saat ini */}
                        <div className='col-span-1'>
                            <div className='mb-12 bg-red-200 relative justify-center items-center rounded-xl shadow-lg'>
                                <div className='grid place-items-center pt-5'>
                                    <span className='font-semibold'>Antrian Saat Ini</span>
                                    <div className='pb-12 pt-2'>    
                                        <span className='text-8xl font-bold'>XXX</span>
                                    </div>
                                    <div className='absolute -bottom-8'>
                                        <div className='flex justify-center bg-red-500 py-5 px-10 text-white rounded-xl font-semibold'>
                                            <span>
                                                LOKET?
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}