import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";

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

export const DefaultModalData = {
  message: "",
  acceptMessage: "",
  declineMessage: "",
  onAccept: undefined,
  onDecline: undefined
}

const modalDataChecker = (modalData) => {

  if (modalData.message != "") {
    // Cek setidaknya ada 1 on accept atau on decline message
    if (modalData.acceptMessage == "" && modalData.declineMessage == "") {
      throw new Error("Modal: Setidaknya butuh satu on Accept Message atau on Decline Message")
    }

    if (modalData.acceptMessage != "") {
      if (typeof modalData.onAccept != 'function') {
        throw new Error("onAccept haruslah berbentuk fungsi")
      }
    }

    if (modalData.declineMessage != "") {
      if (typeof modalData.onDecline != 'function') {
        throw new Error("onDecline haruslah berbentuk fungsi")
      }
    }
  }
}


export function ModalGlobal({ modalData = DefaultModalData }) {
  const [PageLoaded, setPageLoaded] = useState(false)

  modalDataChecker(modalData)

  useEffect(() => {
    setPageLoaded(true)
  }, [])

  const [data, setData] = useState(modalData)

  const handleAccept = () => {
    data.onAccept()
    setData(DefaultModalData)
  }

  const handleDecline = () => {
    data.onDecline()
    setData(DefaultModalData)
  }

  return !PageLoaded ? <></> : ReactDOM.createPortal(
    <>
      { show &&
        (data.message != "") &&
        <>
          <div className="fixed h-screen w-screen z-30 flex justify-center items-center">
            <div className="flex flex-col items-center p-10 bg-white h-auto opacity-100 rounded-2xl ml-8 mr-8 max-w-sm shadow-lg">
              <p className="text-[18px] text-center font-bold">
                {data.message}
              </p>
              <div className="mt-8 flex flex-row gap-12">
                {
                  data.acceptMessage != "" &&
                  <button onClick={handleAccept} className="bg-red-400 min-w-[120px] min-h-[52px] p-4 rounded-xl shadow-lg">
                    <p className="text-white font-bold text-[18px]">
                      {data.acceptMessage}
                    </p>
                  </button>
                }
                {
                  data.declineMessage != "" &&
                  <button onClick={handleDecline} className="bg-gray-500 min-w-[120px] min-h-[52px] p-4 rounded-xl shadow-lg">
                    <p className="text-white font-bold text-[18px]">
                      {data.declineMessage}
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
    , document.getElementById("modal-root"))
}

function Modal({ modalData = DefaultModalData, show = false }) {
  const [PageLoaded, setPageLoaded] = useState(false)

  modalDataChecker(modalData)

  useEffect(() => {
    setPageLoaded(true)
  }, [])

  const [data, setData] = useState(modalData)

  const handleAccept = () => {
    data.onAccept()
    setData(DefaultModalData)
  }

  const handleDecline = () => {
    data.onDecline()
    setData(DefaultModalData)
  }

  return !PageLoaded ? <></> : ReactDOM.createPortal(
    <>
      { show &&
        (data.message != "") &&
        <>
          <div className="fixed h-screen w-screen z-30 flex justify-center items-center">
            <div className="flex flex-col items-center p-10 bg-white h-auto opacity-100 rounded-2xl ml-8 mr-8 max-w-sm shadow-lg">
              <p className="text-[18px] text-center font-bold">
                {data.message}
              </p>
              <div className="mt-8 flex flex-row gap-12">
                {
                  data.acceptMessage != "" &&
                  <button onClick={handleAccept} className="bg-red-400 min-w-[120px] min-h-[52px] p-4 rounded-xl shadow-lg">
                    <p className="text-white font-bold text-[18px]">
                      {data.acceptMessage}
                    </p>
                  </button>
                }
                {
                  data.declineMessage != "" &&
                  <button onClick={handleDecline} className="bg-gray-500 min-w-[120px] min-h-[52px] p-4 rounded-xl shadow-lg">
                    <p className="text-white font-bold text-[18px]">
                      {data.declineMessage}
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
    , document.getElementById("modal-root"))
}

export default Modal
