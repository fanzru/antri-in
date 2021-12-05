import React, {useEffect } from "react";
// import Navbar from "../header/navbar";
// import Backgound from "../background/backgound";
import axios from "axios";
import { selectRequestAdmin, setDataListRequestAdmin } from "../../redux/requestAdmin";
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'universal-cookie';

// bagian isi request
import ListReqAdmin from "./ListRequestAdmin";
import { createToastWarning, selectToast } from "../../redux/toastSlice";
import router from "next/router";


function RequestAdmin(){
  const cookie = new Cookies();

  const List = useSelector(selectRequestAdmin)
  const dispatch = useDispatch(selectRequestAdmin)
  const dispatchToast = useDispatch(selectToast)

  useEffect(() => {


    // Jangan lupa di comment

    let token = cookie.get("token_admin") 
    let config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const role = ""
    if (token) {
      role = JSON.parse(atob(token.split('.')[1]))["role"]
    }
    if (role != "super") {
      router.push("/admin-page")
    }

    axios.get(
      `${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/request`, config
    ).then((res) => {
      dispatch(setDataListRequestAdmin(res.data.data))
    }).catch(e => {
      dispatchToast(createToastWarning("Token tidak valid, kembali ke dashbaord"))
      router.push("/admin-page")
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