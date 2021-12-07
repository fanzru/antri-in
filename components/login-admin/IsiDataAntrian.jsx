import React, { useState, useEffect } from "react";
// import Navbar from "../header/navbar";
// import Backgound from "../background/backgound";
import { HiArrowNarrowRight } from "react-icons/hi";
import { trimSpace } from "../../utils/helper/trimSpace";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import Cookies from 'universal-cookie';
import { createToastWarning, createToastSuccess, selectToast } from "../../redux/toastSlice";
import { useDispatch } from "react-redux";
import router from "next/router";

function IsiDataAntrian() {
  // Cek apakah cookies valid
  const dispatch = useDispatch(selectToast)
  const cookie = new Cookies();
  const [Nama, setNama] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const [validInput, setvalidInput] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Fail, setFail] = useState(false);
  const [Processing, setProcessing] = useState(false);

  useEffect(() => {
    if (trimSpace(Nama) != "" && trimSpace(Deskripsi) != "") {
      setvalidInput(true);
    } else {
      setvalidInput(false);
    }
  }, [Nama, Deskripsi]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setProcessing(true);
    var token = cookie.get("token_admin");
    var config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    var bodyFormData = new FormData();
    bodyFormData.append("nama", Nama);
    bodyFormData.append("deskripsi", Deskripsi);
    
    axios
      .post(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/antrian`,
        bodyFormData,
        config
      )
      .then((res) => {
        setProcessing(false)
        dispatch(createToastSuccess("Berhasil menambahkan antrian!"));
        setSuccess(true)
        router.push("/admin-page")
      })
      .catch((e) => {
        setProcessing(false)
        setFail(true)
        dispatch(createToastWarning("Token tidak valid, kembali ke homepage"));
        // nanti balikkin ke homepage yo
        router.push("/admin-page")
      });
  };

  const renderButton = () => {
    return Processing ? (
      <div className="flex items-center justify-center px-6 py-2 bg-red-300 select-none rounded-lg h-10 w-28 text-white">
        Processing
        <div className="pt-1 ml-1">
          {" "}
          <ClipLoader size={23} color="white" />
        </div>
      </div>
    ) : Fail ? (
      <div className="flex items-center justify-center px-6 py-2 bg-red-300 select-none rounded-lg h-10 w-28 text-white">
        Gagal
      </div>
    ) : Success ? (
      <div className="flex items-center justify-center px-6 py-2 bg-red-300 select-none rounded-lg h-10 w-28 text-white">
        Berhasil
      </div>
    ) : validInput ? (
      <button
        type="submit"
        className="flex items-center justify-center px-6 py-2 bg-red-500 rounded-lg h-10 w-28 text-white"
        onClick={handleSubmit}
      >
        Tambah
        <div className="pt-1 ml-1">
          <HiArrowNarrowRight />
        </div>
      </button>
    ) : (
      <div className="flex items-center justify-center px-6 py-2 bg-red-300 select-none rounded-lg h-10 w-28 text-white">
        Tambah
        <div className="pt-1 ml-1">
          <HiArrowNarrowRight />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-5 place-items-center py-28 pl-10 pr-5">
        <div className="h-full md:col-span-3 hidden md:block">
          <img src="ilus-antri01.svg" alt="ilustrasi" />
        </div>
        <div className="md:col-span-2 px-5 md:px-20 pt-11 w-full md:h-full">
          <span className="text-2xl font-bold">Isi Data Antrian</span>
          <form action="" className="pt-5">
            <label htmlFor="" className="block text-sm text-gray-500 mb-2">
              <p>Nama Antrian</p>
              <p className="flex flex-row text-[10px]"><p className="text-red-500">*</p> Nama Antrian tidak boleh sama dengan antrian lainnya</p>
            </label>
            <input
              type="text"
              name="nama"
              id=""
              placeholder="Masukkan Nama Antrian"
              className="block w-full bg-red-200 rounded-lg shadow-lg placeholder-gray-600 p-3 mb-3"
              onChange={(e) => setNama(e.target.value)}
              value={Nama}
            />
            <label htmlFor="" className="block text-sm text-gray-500 mb-2">
              Deskripsi Antrian
            </label>
            <textarea
              name=""
              id=""
              placeholder="Masukkan Deskripsi Antrian"
              className="resize-none h-32 block w-full bg-red-200 rounded-lg shadow-lg placeholder-gray-600 p-3"
              onChange={(e) => setDeskripsi(e.target.value)}
              value={Deskripsi}
            ></textarea>
            <div className="flex items-center justify-center mt-10">
              {renderButton()}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IsiDataAntrian;
