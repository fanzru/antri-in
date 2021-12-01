import React from 'react';
import { BsTelephone } from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai"

function CekAntrian(props) {
  return (
    <div className="flex flex-col mx-2 h-screen items-center justify-center">      
      
      <div className=" w-full md:w-1/3 px-10">
        <p className="text-xl text-left font-semibold ">Cek Antrian</p>
        <div className="flex mt-4">
          <p className="text-sm text-left text-gray-500">Nomor Telepon</p>
          <p className="text-sm text-left text-red-500">*</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:w-1/3 mt-1 px-10">
        <div className="flex rounded-lg shadow-lg w-full">
          <div className="inline-flex items-center px-3 rounded-l-lg bg-red-100 text-gray-500 text-sm">
              <BsTelephone />
          </div>
          <input
              type="text"
              className="p-2 h-10 focus:outline-none focus:border-indigo-500 placeholder-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-l-2 border-gray-300 bg-red-100"
              placeholder="081XXXXXXXXX"
          />
        </div>
      </div>

      <div className="flex mt-5 px-6 py-2 items-center justify-center bg-red-400 rounded-md hover:bg-red-500 hover:text-white">
        <button className="flex items-center font-bold text-xs text-white">
          <p className="px-1">Cek</p>
          <AiOutlineArrowRight/>
        </button>
        </div>
    </div>
  )
}

export default CekAntrian;