import React, { useState, useEffect } from 'react'
import { trimSpace } from "../../utils/helper/trimSpace"

function Modal({ modalData }) {

  /*
  modalData Setup
  
    const [modalData, setModal] = useState({
    message: "",
    acceptMessage: "",
    declineMessage: "",
    onAccept: undefined,
    onDecline: undefined,
    })

  */

  const checker = (modaldata) => {
    if (typeof modaldata.message != 'string') {
      throw "Message yang diupdate harus ada."
    }

    if ((modaldata.acceptMessage == "" || modaldata.acceptMessage == undefined) && (modaldata.declineMessage == "" || modaldata.declineMessage == undefined)){
      throw "Setidaknya menyiapkan accept message atau decline message"
    }

    if (modaldata.acceptMessage != "" || modaldata.acceptMessage != undefined){
      if (typeof modaldata.acceptMessage == 'string' && typeof modaldata.onAccept != 'function'){
        throw "Harus menuyiapkan onDecline"
      }  
    }

    if (modaldata.declineMessage != "" || modaldata.declineMessage != undefined){
      if (typeof modaldata.declineMessage == 'string' && typeof modaldata.onDecline != 'function'){
        throw "Harus menuyiapkan onDecline"
      }  
    }
  }

  useEffect(()=> {
    setData({
      message: modalData.message,
      acceept_message: modalData.acceptMessage,
      decline_message: modalData.declineMessage,
      on_accept: modalData.onAccept,
      on_decline: modalData.onDecline
    })
  }, [modalData])

  const [data, setData] = useState({
    message: modalData.message,
    acceept_message: modalData.acceptMessage,
    decline_message: modalData.declineMessage,
    on_accept: modalData.onAccept,
    on_decline: modalData.onDecline
  })

  const handleAccept = () => {
    data.on_accept()
    setData({
      message: "",
      acceept_message: "",
      decline_message: "",
      on_accept: undefined,
      on_decline: undefined
    })
  }

  const handleDecline = () => {
    data.on_decline()
    setData({
      message: "",
      acceept_message: "",
      decline_message: "",
      on_accept: undefined,
      on_decline: undefined
    })
  }

  return (
    <>
      {
        (data.message != "") &&
        <>
          <div className="fixed h-screen w-screen z-30 flex justify-center items-center">
            <div className="flex flex-col items-center p-10 bg-white h-auto opacity-100 rounded-2xl ml-8 mr-8 max-w-sm shadow-lg">
              <p className="text-[18px] text-center font-bold">
                {data.message}
              </p>
              <div className="mt-8 flex flex-row gap-12">
                {
                  data.acceept_message != "" &&
                  <button onClick={handleAccept} className="bg-red-400 min-w-[120px] min-h-[52px] p-4 rounded-xl shadow-lg">
                    <p className="text-white font-bold text-[18px]">
                      {data.acceept_message}
                    </p>
                  </button>
                }
                {
                  data.decline_message != "" &&
                  <button onClick={handleDecline} className="bg-gray-500 min-w-[120px] min-h-[52px] p-4 rounded-xl shadow-lg">
                    <p className="text-white font-bold text-[18px]">
                      {data.decline_message}
                    </p>
                  </button>
                }
              </div>
            </div>
          </div>
          <div className="fixed bg-black h-screen w-screen z-20 opacity-60 flex justify-center items-center">
          </div>
        </>
      }
    </>
  )
}

export default Modal
