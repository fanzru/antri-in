import React, {useState, useEffect} from 'react';
import ButtonAgain from './ButtonAgain'
import { Provider } from 'react-redux'

function EndAntrian(props) {

  // const router = useRouter()
  // const [AntriAgain, setAntriAgain] = useState(false)
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   router.push()
  // }
  // const handleNoClick = (e) => {
  //   e.preventDefault()
  //   setAntriAgain(true)
  //}

  // const ButtonAgain = () => {
  //   return AntriAgain ? (
  //     <div>
  //       <div className="mt-8">
  //         <p className="font-bold text-red-500">Terimakasih sudah mengantri</p>
  //       </div>
  //     </div>
  //   ) : (
  //     <div>
  //       <div className="mt-8">
  //         <p className="font-bold text-black">Ingin mengantri lagi?</p>
  //       </div>
      
  //       <div className="flex justify-between py-2 px-4 gap-4 mt-4">
  //         <div className="flex px-8 py-2 items-center justify-center bg-red-500 rounded-md hover:bg-red-600">
  //           <button href={href} onClick={handleClick} className="text-white font-bold text-xs">
  //             Ya
  //           </button>
  //         </div>
  //         <div className="flex px-6 py-2 items-center justify-center bg-red-100 rounded-md hover:bg-red-500 hover:text-white">
  //           <button onClick={handleNoClick} className="font-bold text-xs ">
  //             Tidak
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  
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