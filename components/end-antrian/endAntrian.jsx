import React from 'react';

function EndAntrian(props){
  return (
    <div>
      <div className="flex items-center mx-8 justify-center h-screen">
        <div className="flex flex-col items-center justify-center w-full md:max-w-sm ">
          
          <div className="flex w-full justify-center">
            <h1 className="text-3xl font-bold">Antrian Selesai!</h1>
          </div>
          
          <div className="mt-6">
            <img src="ilus-antrian-selesai.svg" alt="" />
          </div>

          <div className="mt-8">
            <p className="font-bold text-black">Ingin mengantri lagi?</p>
          </div>
          <div className="flex justify-between gap-4 mt-4 border border-black">
            <div className="flex px-8 py-4 items-center justify-center bg-red-500 rounded-md">
              <button className="text-white font-bold text-xs">
                Ya
              </button>
            </div>
            <div className="flex px-6 py-4 items-center justify-center bg-red-100 rounded-md">
              <button className="text-black font-bold text-xs">
                Tidak
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default EndAntrian