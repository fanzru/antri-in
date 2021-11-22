import React, {useEffect, useState} from "react";
import Navbar from "../header/navbar";
import Backgound from "../background/backgound";
import axios from "axios";
import { selectRequestAdmin, setDataListRequestAdmin } from "../../redux/requestAdmin";
import { useSelector, useDispatch } from "react-redux";

// bagian isi request
import {BsCheckLg} from "react-icons/bs"
import ListReqAdmin from "./ListRequestAdmin";


function RequestAdmin(){

  const List = useSelector(selectRequestAdmin)
  const dispatch = useDispatch(selectRequestAdmin)

  useEffect(() => {

    let cookie = require('cookie-cutter');

    // Jangan lupa di comment
    cookie.set("token_admin","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hIjoiZXZlcnlvbmVAYW50cmlpbi5jb20iLCJyb2xlIjoic3VwZXIiLCJlbWFpbCI6ImV2ZXJ5b25lQGFudHJpaW4uY29tIiwiaWQiOiIwZDQxOTEzYi1kMDJlLTRiZjktYjU5OS0xZGVlNDU3MjJiZjAiLCJleHAiOjE2Mzc2NTg2NjR9.NxrhaxlajLfR0aQIWsuafoHHSN1sCtgXLVPYoXNs1kQ") 

    let token = cookie.get("token_admin") 
    let config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    axios.get(
      `${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/request`, config
    ).then((res) => {
      dispatch(setDataListRequestAdmin(res.data.data))
    }).catch(e => {
      alert("Token tidak valid, kembali ke homepage")
      // nanti balikkin ke homepage yo
    })
  }, [])

    // const Dummylist = [
    //     {
    //       nama: "Antrian 1",
    //     },
    //     {
    //       nama: "Antrian 2",
    //     },
    //     {
    //       nama: "Antrian 3",
    //     },
    //     {
    //       nama: "Antrian 4",
    //     },
    //     {
    //       nama: "Antrian 5",
    //     },
    //     {
    //       nama: "Antrian 6",
    //     },
    //   ];

    return (
        <div>
            <Navbar/>
            <Backgound/>
            <div className='mt-10 mx-8 md:mx-36'>
                <span className='font-bold text-2xl'>Request Admin</span>
                <div className="bg-gray-400 p-5 mt-5 md:mt-8 rounded-xl shadow-lg">
                    {List.map((data, idx) => {
                        return <ListReqAdmin index={idx} data={data}/>
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default RequestAdmin;