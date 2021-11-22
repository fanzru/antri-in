import React from "react";
import {BsCheckLg} from "react-icons/bs"

function ListReqAdmin(props){
    const dataReq = props.data;

    return (
        <div>
            <div className="bg-red-200 px-5 py-2 my-3 flex justify-between rounded-xl shadow-lg">
                <span className='flex items-center justify-center font-semibold'>{dataReq.nama}</span>
                <div className='py-2 flex gap-3'>
                    <button className='py-2 w-10 bg-red-500 fill-current text-white flex items-center justify-center'>
                        <BsCheckLg/>
                    </button>
                    <button className='h-full w-8 bg-red-500 flex items-center justify-center'>
                        <img src="rounded-x-button.svg" alt="x" srcset="" className='h-full p-2'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListReqAdmin;