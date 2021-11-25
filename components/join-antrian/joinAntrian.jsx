import React, { useState, useEffect } from "react";
import DescriptionAntrian from "./descriptionAntrian";
import axios from "axios";
import {trimSpace} from "../../utils/helper/trimSpace"
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";

function JoinAntrian(props) {
  const detailAntrian = props.data
  const router = useRouter()

  const [nama, setNama] = useState("");
  const [nomorHp, setNomorHP] = useState("");
  const [Valid, setValid] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [GagalText, setGagalText] = useState("");

  useEffect(() => {
    if ( trimSpace(nama) && nomorHp.length > 8) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [nama, nomorHp]);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    var bodyFormData = new FormData();
    bodyFormData.append("antrian_id", router.query.id);
    bodyFormData.append("no_telp", nomorHp);
    bodyFormData.append("nama", nama);

    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/pengantri`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (res) {
        console.log(res.data.data);
        const data = res.data.data
        setSuccess(true);
        var cookie = require("cookie-cutter");
        cookie.set('token_pengantri', data.token)
        // do some logic here if success (200 OK)
        // DO routing here
      })
      .catch(function (err) {
        // do some logic if not (200 OK)
        var res = err.response.data;
        setGagalText(res.message);
        setLoading(false);
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
                type="number"
                id="nohp"
                placeholder="081326161035"
                value={nomorHp}
                onChange={(e) => setNomorHP(e.target.value)}
              />
            </div>
            {GagalText != "" && (
              <div className="bg-red-50 mt-2 p-3 rounded-lg mb-3">
                <p className="text-center text-sm text-red-700 font-bold">
                  {GagalText}
                </p>
                <p className="text-center text-sm text-red-400">
                  Returning to Homepage
                </p>
              </div>
            )}
            <div className="flex items-center justify-between">
            {Success ? (
                <p className="items-center select-none bg-red-300 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                  Redirecting
                </p>
              ) : Loading ? (
                <div className="flex items-center justify-center select-none bg-red-300 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline gap-5">
                  <p>Processing</p>
                  <ClipLoader size={20} color="white" />
                </div>
              ) : Valid ? (
                <button
                  onClick={onSubmit}
                  className=" items-center bg-red-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  Join Antrian
                </button>
              ) : (
                <p className="items-center select-none bg-red-300 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                  Join Antrian
                </p>
              )}
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
