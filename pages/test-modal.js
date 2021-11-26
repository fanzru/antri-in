import React, {useState} from 'react'
import Modal from '../components/modal/Modal'

function TestModal() {

  const [modalData, setModal] = useState({
    message: "",
    acceptMessage: "",
    declineMessage: "",
    onAccept: undefined,
    onDecline: undefined,
  })

  function testModalAccept() {
    console.log("Halo aku di acc lho")
  }

  function testModalDecline() {
    alert("Aku di decline :(")
  }

  const handleClick = () => {
    setModal({
      message: "Halo",
      acceptMessage: "oke",
      declineMessage: "gagal",
      onAccept: testModalAccept,
      onDecline: testModalDecline,
    })
  }

  return (
    <>
    <Modal modalData={modalData} />
    <div className="w-scree h-screen bg-gray-400 flex justify-center items-center">
      <button className="p-3 bg-white shadow-lg rounded-lg" onClick={handleClick} >
        Klik untuk menampilkan Modal, Jika di acc maka akan keluar console log, jka tidak maka akan keluar alert
      </button>
    </div>
    </>
  )
}

export default TestModal
