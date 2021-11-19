import React from 'react';

function CalledAntrian(props) {
  return (
    <div>
      <div className="flex items-center mx-8 justify-center h-screen">
        <div className="flex flex-col container items-center justify-center w-full md:max-w-sm ">
          <div className="flex w-full justify-center">
            <h1 className="text-3xl font-bold">Antrian Anda Dipanggil</h1>
          </div>

          <div className="flex flex-col py-5 mt-10 w-full justify-between mx-auto border rounded-xl shadow-md bg-red-200">
            <div className="flex justify-center font-semibold text-xl text-gray-500 ">
              <p>Antrian Saat ini</p>
            </div>
            <div className="flex justify-center font-bold text-9xl">
              <p>10</p>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-10 mb-16">
            <p className="text-center text-xs">Yeay antrian sudah sampai.</p>
            <p className="text-center text-xs text-red-500">Semoga harimu menyenangkan.</p>
          </div>
          
          <div className="flex mx-auto px-8 py-4 items-center justify-center mb-10 bg-red-500 rounded-md">
            <button className="text-white font-semibold text-xs">
              Batalkan Antrian
            </button>
          </div>

        </div>  
      </div>
    </div>
  )
}

export default CalledAntrian;