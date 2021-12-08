import React, { useState, useEffect } from "react";
// import Navbar from "../header/navbar";
// import Backgound from "../background/backgound";
import { MdOutlineSearch, MdPersonAddAlt1 } from "react-icons/md"
import { useRouter } from 'next/router'
import ListAntrianAdmin from "./ListAntrianAdmin";
import axios from "axios"
import Cookies from 'universal-cookie';
import { useDispatch } from "react-redux";
import { createToastWarning, selectToast } from "../../redux/toastSlice";

function Adminpage() {
  const router = useRouter()
  const cookie = new Cookies();
  const dispatch = useDispatch(selectToast)
  let token = cookie.get("token_admin")
  let config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const role = ""
  if (token) {
    role = JSON.parse(atob(token.split('.')[1]))["role"]
  }

  const [dataAntrian, setAntrian] = useState([]);
  const [jumlahRequestAdmin, setJumlahRequestAdmin] = useState("-")
  const [Search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
    // axios
    //   .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian?search=${e.target.value}`)
    //   .then((res) => {
    //     const data = res.data.data;
    //     setAntrian(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  const getAntrian = () => {
    if (Search == "") {
      axios
        .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian`)
        .then((res) => {
          const data = res.data.data;
          setAntrian(data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      axios
      .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian?search=${Search}`)
      .then((res) => {
        const data = res.data.data;
        setAntrian(data);
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };

  const getRequestAdmin = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/request`, config)
      .then((res) => {
        const data = res.data.data;
        setJumlahRequestAdmin(data.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    const interval = setInterval(() => { getAntrian(); if (role == "super") { getRequestAdmin()}; }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [Search, ]);

  return (
    <div className="fixed w-screen h-screen">
      <div className='md:grid md:grid-cols-2'>
        <div className='mt-20 lg:mt-24 md:col-start-2 md:col-end-3'>
          <div className='bg-gray-400 md:bg-transparent my-3 mx-5 md:mx-8 p-8 rounded-2xl md:rounded-none shadow-xl md:shadow-none'>
            <div className='md:grid md:grid-cols-2 md:gap-2 mb-8'>
              <div className="mb-3 md:mb-0 flex h-12 rounded-full shadow-lg">
                <input
                  onChange={handleSearch}
                  className="py-3 pl-4 focus:outline-none focus:border-red-300 block h-12 w-full rounded-l-full text-sm border-3 border-gray-300 bg-white"
                  type="search"
                  name="search"
                  placeholder="Cari Antrian"
                ></input>
                <button
                  type="submit"
                  className="inline-flex items-center h-12 px-3 rounded-r-full bg-white text-gray-500 text-md">
                  <MdOutlineSearch />
                </button>
              </div>
              {(role == "super") &&
                <div className='gap-2 flex justify-between'>
                  {/* <a 
                  href=""
                  className="bg-red-50 rounded-xl h-12 md:h-full w-1/4 border-2 border-red-300 text-red-600 font-semibold text-center pt-2.5 md:pt-1.5"
                >3</a> */}
                  <button onClick={() => { router.push("/admin/permintaan") }} className='bg-red-50 rounded-xl h-12 md:h-full w-1/3 border-2 border-red-300 text-red-600 text-base font-semibold text-center shadow-lg inline-flex items-center justify-center'>
                    <div className='mr-1'>
                      <MdPersonAddAlt1 />
                    </div>
                    <span>{jumlahRequestAdmin}</span>
                  </button>
                  {/* <a 
                  href=""
                  className="bg-red-50 rounded-xl h-12 md:h-full w-full border-2 border-red-300 text-red-600 font-semibold text-center pt-2.5 md:pt-1"
                >Buat Antrian Baru</a> */}
                  <button onClick={() => { router.push("/admin/antrian/tambah") }} className='bg-red-50 rounded-xl h-12 md:h-full w-full border-2 border-red-300 text-red-600 font-semibold text-center shadow-lg text-sm'>
                    Buat Antrian Baru
                  </button>
                </div>
              }
            </div>
            <div className=' overflow-y-scroll h-80 md:h-72 p-1'>
              {dataAntrian.map((data, idx) => {
                return <ListAntrianAdmin key={idx} data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Adminpage;