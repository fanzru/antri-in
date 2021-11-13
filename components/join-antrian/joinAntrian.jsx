import React from 'react';

function JoinAntrian(props) {
  return (
    <div className="mx-auto bg-gray-100 h-screen">
      <div className="container mx-auto m w-full max-w-xs py-32">
        <div className="text-center font-bold mb-4 text-3xl">Isi Biodata Antrian</div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Nama
            </label>
            <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Masukan Nama Lengkap" id="nama"/>
          </div>
          <div className="mb-6">
            <label htmlFor="nohp" className="block text-gray-700 text-sm font-bold mb-4">
              Nomor HP
            </label>
            <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="nohp" placeholder="081326161035"/>
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
  );
}

export default JoinAntrian;