import React from "react";
import {BsFillPersonFill, BsPlusLg} from "react-icons/Bs"

function InformationAntrian(){
    return(
        <div>
            <div>
                <div className='flex items-center justify-between bg-gray-400'>
                    <span>Customer Service Antrian A</span>
                    <div className='flex items-center'>
                        <div>
                            <BsFillPersonFill/>
                        </div>
                        <span>3</span>
                    </div>
                </div>
                <div className='bg-gray-500 flex justify-center items-center'>
                    <div className='grid place-items-center'>
                        <span className>Antrian Saat Ini</span>
                        <div>
                            <span>XXX</span>
                        </div>
                        <div>
                            <button>Berikutnya</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-600'>
                    <div className='flex justify-between'>
                        <span>Nama Panjang</span>
                        <button>Berikutnya</button>
                    </div>
                    <div className='flex justify-between'>
                        <span>Tambah Antrian Manual</span>
                        <div>
                            <BsPlusLg/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationAntrian;