import React, { useState, useEffect } from "react";
import Navbar from "../header/navbar";
import Backgound from "../background/backgound";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import { useRouter } from 'next/router'
import axios from "axios";
import Image from 'next/image'


function Home(props) {
  const [dataAntrian, setAntrian] = useState([]);
  const [Search, setSearch] = useState("")
  const [Loaded, setLoaded] = useState(false)
  const router = useRouter()
  const getAntrian = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian`)
      .then((res) => {
        const data = res.data.data;
        setAntrian(data);
        setLoaded(true)
      })
      .catch((e) => {
        console.log(e);
        setLoaded(true)
      });
  };

  useEffect(() => {
    getAntrian();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value)
    axios
    .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian?search=${e.target.value}`)
    .then((res) => {
      const data = res.data.data;
      setAntrian(data);
    })
    .catch((e) => {
      console.log(e);
    });
  }


  return (
    <div className="">
      <Backgound />
      <div className={""}>
        <div className="container mx-auto mt-12 px-7 md:flex md:justify-between  ">
          <div className="flex flex-col mb-10">
            <img src="/antriin-ilus.svg" className="m-2 " height={408.94} width={584} />
            {/* <img src="antriin-ilus.svg" alt="Ilustrator Antriin" /> */}
            <div className="flex flex-col">
              <h1 className="mt-3 flex justify-center font-semibold text-2xl text-red-400">
                {" "}
                Antri.in
              </h1>
              <p className="text-sm text-center mt-2 font-light">
                Antriin merupakan sebuah webapps untuk menbuat dan mengikuti
                antrian jadi lebih mudah dan menyenangkan
              </p>
            </div>
          </div>

          <div className="flex flex-col md:w-full md:mx-40">
            <div className="flex justify-center font-extrabold text-black text-xl uppercase">
              {" "}
              Silahkan Memilih
            </div>
            {/*<div className=" mt-4">
              <input
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full   py-3 px-4 leading-tight focus:outline-none focus:ring-red-300 focus:ring focus:bg-white "
                id="search" type="text" placeholder="Cari Antrian"/>
            </div>*/}

            <div className="w-[290px] md:w-[600px]  pt-2 relative mx-auto text-gray-60 ">
              <input
                className="border-2 w-full border-gray-300 bg-white py-3 px-4  rounded-full text-sm focus:outline-none focus:border-red-300"
                type="text"
                name="search"
                placeholder="Cari Antrianmu"
                onChange={handleSearch}
                value={Search}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-6 mr-4 "
              >
                <MdOutlineSearch />
              </button>
            </div>

            <div className="flex flex-col py-5 overflow-y-auto h-80 px-4 mt-5 ">
              {(!Loaded) ?  <div className="text-center select-none">Memuat Data Antrian...</div> : dataAntrian.length != 0 ? dataAntrian.map((antrian, index) => {
                return (
                  <button key={index} onClick={ ()=> router.push(`/antri/${antrian._id}`)  } className="flex  items-center justify-between w-full py-4 px-3 mb-2 rounded-full bg-red-300 hover:bg-red-400">
                    <div className="font-reguler text-sm">{antrian.nama}</div>
                    <div className="flex justify-between items-center">
                      <div className="mx-3 font-bold items-center text-sm">
                        {" "}
                        {antrian.max_antrian - antrian.curr_antrian}{" "}
                      </div>
                      <BsFillPeopleFill />
                    </div>
                  </button>
                );
              }) : <div className="text-center select-none">Antrian Tidak Tersedia</div>}
            </div>
          </div>
        </div>

{/*         <div className="container mx-auto mt-10 mb-4 content-center"> */}
         <div className={"md:fixed bottom-4 left-0 w-full text-center mb-5 mt-20 "}>
          <div className="flex items-center justify-center ">
            <a onClick={() => router.push("/masuk")}>
              <button className="text-red-400 font-bold hover:text-red-600 ">
                Login Admin
              </button>
            </a>
            <div className="text-red-400 font-bold px-2"> || </div>
            <a onClick={() => router.push("/antri/periksa")}>
              <button className="text-red-400 font-bold hover:text-red-600 ">
                Lanjutkan Antrian
              </button>
            </a>
          </div>

          <p className="flex items-center justify-center font-light text-sm">
            Support by Antri.in and Yaudahlah Team
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
