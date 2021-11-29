import React, { useState } from 'react'
import Modal, { DefaultModalData } from '../components/modal/Modal'

function TestModal() {

  const [ShowModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(DefaultModalData)

  const handleClick = () => {
    /// Setup modal
    modalData.message = "Halo ini modalnya" // Must

    modalData.acceptMessage = "Ini tombol accept" // Optional
    modalData.onAccept = () => { // Must if acceptMessage is not empty
      alert("Aku di acc yay!")
      setShowModal(false) // Kalau mau ditutup setelah di klik,harus tambahin ini
    }

    modalData.declineMessage = "Ini tombol decline" // Optional
    modalData.onDecline = () => {  // Must if declineMessage is not empty
      alert("Aku di decline")
      setShowModal(false) // Kalau mau ditutup setelah di klik, harus tambahin ini
    }
    setModalData(modalData)
    setShowModal(true)
  }

  return (
    <>
      <Modal modalData={modalData} show={ShowModal} />
      <div className="w-scree h-screen bg-gray-400 flex justify-center items-center">
        <button className="p-3 bg-white shadow-lg rounded-lg" onClick={handleClick} >
          Klik untuk menampilkan Modal, Jika di acc maka akan keluar console log, jka tidak maka akan keluar alert
        </button>
      </div>
    </>
  )
}

export default TestModal
