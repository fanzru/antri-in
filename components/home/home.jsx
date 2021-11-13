import React from 'react';
import Navbar from "../header/navbar";

function Home(props) {
  return (
    <div className="">
      <Navbar/>
      <div className="container mx-auto mt-12 px-7 md:flex md:justify-between  border border-black">

        <div className="flex mt-4 my-10 py-48 px-10 md:px-40 items-center justify-center bg-gray-100 rounded ">
          <div className="font-reguler text-gray-400 text-sm">Antrianmu Kosong</div>
        </div>

        <div className="flex flex-col border border-black">
          <div className="w-full mt-4">
            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:border-red-100 focus:bg-white " id="search" type="text" placeholder="Cari Antrian"/>
          </div>

          <div className=" flex my-5 py-48 bg-white border border-red-700 rounded shadow-md">
            List Antrian
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;