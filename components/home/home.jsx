import React from 'react';
import Navbar from "../header/navbar";
import Backgound from "../background/backgound";

function Home(props) {
  return (
    <div className="">
      <Backgound/>
      <div className={"z-50"}>
        <Navbar/>
        <div>
          <img src="/public/Ellipse1.svg" alt=""/>
        </div>
        <div className="container mx-auto mt-12 px-7 md:flex md:justify-between  border border-black">

          <div className="flex mt-4 my-10 py-48 md:px-40 items-center justify-center bg-gray-100 rounded ">
            <div className="font-reguler text-gray-400 text-sm">Antrianmu Kosong</div>
          </div>

          <div className="flex flex-col border border-black">

            <div className="w-full mt-4">
              {/*<HiSearch className={"absolute text-red-500 mt-3.5 w-full flex justify-end"} />*/}
              <input
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:bg-white "
                id="search" type="text" placeholder="Cari Antrian"/>
            </div>

            <div className=" flex my-5 py-48 bg-white border border-red-700 rounded shadow-md">
              List Antrian
            </div>

          </div>

        </div>

        <div className="container mx-auto mt-10 mb-4 border border-black content-center">
          <div className="flex items-center justify-center ">
            <a href="/loginAdmin">
              <button className="text-red-400 font-bold hover:text-red-600 "> Login Admin</button>
            </a>
        </div>

        <p className="flex items-center justify-center font-light text-sm">
          Support by Antri.in and Yaudahlah Team
        </p>
      </div>
    </div>

</div>
)
  ;
}

export default Home;