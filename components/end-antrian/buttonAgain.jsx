import React, {useState} from 'react';
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'
import selectEndAntrianStatus  from "../../redux/endAntriSlice";

function ButtonAgain ({children,href}){
  
  const router = useRouter()
  const [AntriAgain, setAntriAgain] = useState(false)
 
  
  const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
  }
  const handleNoClick = (e) => {
      e.preventDefault()
      setAntriAgain(true)
  }

  //const statusEnd = useSelector(selectEndAntrianStatus)
  //console.log(statusEnd)
  
  return AntriAgain ? (
      <div>
        <div className="mt-8">
          <p className="font-bold text-red-500">Terimakasih sudah mengantri</p>
        </div>
      </div>
    ) : (
      <div>
        <div className="mt-8">
          <p className="font-bold text-black">Ingin mengantri lagi?</p>
        </div>
      
        <div className="flex justify-between py-2 px-4 gap-4 mt-4">
          <div className="flex px-8 py-2 items-center justify-center bg-red-500 rounded-md hover:bg-red-600">
            <button href={href} onClick={handleClick} className="text-white font-bold text-xs">
              Ya
            </button>
          </div>
          <div className="flex px-6 py-2 items-center justify-center bg-red-100 rounded-md hover:bg-red-500 hover:text-white">
            <button onClick={handleNoClick} className="font-bold text-xs ">
              Tidak
            </button>
          </div>
        </div>
      </div>
    )
}

export default ButtonAgain