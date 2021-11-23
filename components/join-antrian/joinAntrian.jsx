import React, { useState } from "react";
import DescriptionAntrian from "./descriptionAntrian";
import axios from "axios";

function JoinAntrian(props) {
  const detailAntrian = props.data

  const antrian = {
    nama: "sembako",
    description:
      "Antrian ini ditujukan untuk warga desa sidodadi,Antrian ini ditujukan untuk warga desa sidodadi",
    jumlah_antrian: 100,
  };

  const [nama, setNama] = useState("");
  const [nomorHp, setNomorHP] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      nama: nama,
      nomor_hp: nomorHp,
    };
    axios
      .post(`${process.env.HOSTNAME}/api/`, data)
      .then(() => {
        console.log("Success");
      })
      .catch((e) => {
        console.log("error");
      });
  };

  return (
    <div className="mx-auto h-screen ">
      <div className="flex flex-col container mx-auto w-full py-3 items-center mt-4 md:mt-20 md:flex-row">
        <div className="flex flex-col w-full py-auto px-8">
          <div className="shadow-md rounded-md bg-white py-2 px-4">
            <div className="flex justify-center font-bold text-red-400 text-2xl mt-4">
              Informasi Antrian
            </div>
            <DescriptionAntrian data={detailAntrian} />
          </div>
        </div>
        <div className="flex mx-auto flex-col w-full mt-4">
          <div className="text-center font-bold mb-4 text-3xl">
            Isi Biodata Antrian
          </div>
          <form className="rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-black text-sm font-bold mb-2"
              >
                Nama
              </label>
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Masukan Nama Lengkap"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="nohp"
                className="block text-black text-sm font-bold mb-4"
              >
                Nomor HP
              </label>
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="nohp"
                placeholder="081326161035"
                value={nomorHp}
                onChange={(e) => setNomorHP(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className=" items-center bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Join Antrian
              </button>
              <a className="inline-block align-baseline font-reguler text-sm hover:text-red-400">
                Bantuan
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JoinAntrian;
