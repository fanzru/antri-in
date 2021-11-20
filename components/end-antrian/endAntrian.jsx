import React, {useState, useEffect} from 'react';
import ButtonAgain from './ButtonAgain'
import { Provider } from 'react-redux'

function EndAntrian(props) {

  
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
          <ButtonAgain href={"/"} />
          
          
        </div>
      </div>
    </div>
  )
}

export default EndAntrian