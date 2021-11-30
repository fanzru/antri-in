import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'

function EndAntrian(props) {

  const router = useRouter()
  const [AntriAgain, setAntriAgain] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/")
  }
  const handleNoClick = (e) => {
    e.preventDefault()
    setAntriAgain(true)
  }

  const ButtonAgain = () => {
    return AntriAgain ? (
      <div>
        <div className="mt-8">
          <p className="font-bold text-red-500">Terimakasih sudah mengantri</p>
        </div>
      </div>
    ) : (
      <div>
        <div className="mt-8">
          <p className="text-center font-bold text-black">Ingin mengantri lagi?</p>
        </div>
      
        <div className="flex justify-between py-2 px-4 gap-4 mt-4">
          <button onClick={handleClick}  className="flex px-8 py-2 items-center justify-center bg-red-500 rounded-md hover:bg-red-600">
            <div className="text-white font-bold text-xs">
              Ya
            </div>
          </button>
          <button onClick={handleNoClick} className="flex px-6 py-2 items-center justify-center bg-red-100 rounded-md hover:bg-red-500 hover:text-white">
            <div  className="font-bold text-xs ">
              Tidak
            </div>
          </button>
        </div>
      </div>
    )
  }
  
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