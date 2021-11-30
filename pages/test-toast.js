import React from 'react'
import { useDispatch } from 'react-redux'
import { selectToast, createToastError, createToastSuccess, createToastWarning } from '../redux/toastSlice'

function TestToast() {
  const dispatch = useDispatch(selectToast)

  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col gap-5 justify-center items-center">
      <button className="p-3 bg-white shadow-lg rounded-lg" onClick={() => {dispatch(createToastWarning("Ini Warning"))}} >
        Klik untuk menampilkan Toaster Warning
      </button>
      <button className="p-3 bg-white shadow-lg rounded-lg" onClick={() => {dispatch(createToastError("Ini Error"))}} >
        Klik untuk menampilkan Toaster Error
      </button>
      <button className="p-3 bg-white shadow-lg rounded-lg" onClick={() => dispatch(createToastSuccess("Ini Success"))} >
        Klik untuk menampilkan Toaster Success
      </button>
    </div>
  )
}

export default TestToast
