import React from "react";
import Navbar from "../header/navbar";
import Backgound from "../background/backgound";
import {MdOutlineSearch} from "react-icons/md"
import ListAntrianAdmin from "./ListAntrianAdmin";

function Adminpage(){
  const DummyList = [
    {
      nama: "Antrian 1",
      jumlah: "10"
    },
    {
      nama: "Antrian 2",
      jumlah: "12"
    },
    {
      nama: "Antrian 3",
      jumlah: "13"
    },
  ];
  return(
    <div>
      <Backgound/>
      <Navbar/>
      <div className='mt-24'>
        <div className='bg-gray-400 md:bg-transparent my-3 mx-5 md:mx-10 p-8 rounded-2xl md:rounded-none shadow-xl md:shadow-none'>
          <div className='md:grid md:grid-cols-2 md:gap-2 pb-3'>
            <div className="mb-3 md:mb-0 flex h-12 rounded-full shadow-lg">
              <input
                className="py-3 px-4 focus:outline-none focus:border-red-300 block h-12 w-full rounded-l-full text-sm border-3 border-gray-300 bg-white"
                type="search"
                name="search"
                placeholder="Cari Antrian"
              ></input>
              <button
                type="submit"
                className="inline-flex items-center h-12 px-3 rounded-r-full bg-white text-gray-500 text-md">
                <MdOutlineSearch/>
              </button>
            </div>
            <div className='gap-2 flex justify-between'>
              {/* <a 
                href=""
                className="bg-red-50 rounded-xl h-12 md:h-full w-1/4 border-2 border-red-300 text-red-600 font-semibold text-center pt-2.5 md:pt-1.5"
              >3</a> */}
              <button className='bg-red-50 rounded-xl h-12 md:h-full w-1/4 border-2 border-red-300 text-red-600 font-semibold text-center shadow-lg'>
                3
              </button>
              {/* <a 
                href=""
                className="bg-red-50 rounded-xl h-12 md:h-full w-full border-2 border-red-300 text-red-600 font-semibold text-center pt-2.5 md:pt-1"
              >Buat Antrian Baru</a> */}
              <button className='bg-red-50 rounded-xl h-12 md:h-full w-full border-2 border-red-300 text-red-600 font-semibold text-center shadow-lg'>
                Buat Antrian Baru
              </button>
            </div>
          </div>
          <div>
            {DummyList.map((data) => {
              return <ListAntrianAdmin data={data} />;
            })}
          </div>
        </div>
        
      </div>
    </div>
      
  )
}

export default Adminpage;