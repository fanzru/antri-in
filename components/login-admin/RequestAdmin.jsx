import React from "react";
import Navbar from "../header/navbar";
import Backgound from "../background/backgound";

// bagian isi request
import {BsCheckLg} from "react-icons/bs"
import ListReqAdmin from "./ListRequestAdmin";


function RequestAdmin(){
    const Dummylist = [
        {
          nama: "Antrian 1",
        },
        {
          nama: "Antrian 2",
        },
        {
          nama: "Antrian 3",
        },
        {
          nama: "Antrian 4",
        },
        {
          nama: "Antrian 5",
        },
        {
          nama: "Antrian 6",
        },
      ];
    return (
        <div>
            <Navbar/>
            <Backgound/>
            <div className='mt-10 mx-8 md:mx-36'>
                <span className='font-bold text-2xl'>Request Admin</span>
                <div className="bg-gray-400 p-5 mt-5 md:mt-8 rounded-xl shadow-lg">
                    {Dummylist.map((data) => {
                        return <ListReqAdmin data={data}/>
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default RequestAdmin;