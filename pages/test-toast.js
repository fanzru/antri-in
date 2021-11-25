import React from 'react'
import { useDispatch } from 'react-redux'
import { createToast, selectToast } from '../redux/toastSlice'

function TestToast() {
  const dispatch = useDispatch(selectToast)
  const handleClick = () => {
    dispatch(createToast("Ini Message"))
  }
  return (
    <div className="w-scree h-screen bg-gray-400 flex justify-center items-center">
      <button className="p-3 bg-white shadow-lg rounded-lg" onClick={handleClick} >
        Klik untuk menampilkan Toaster
      </button>
    </div>
  )
}

export default TestToast
