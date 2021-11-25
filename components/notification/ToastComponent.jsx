import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectToast, deleteToastID } from '../../redux/toastSlice'
import { BiX } from "react-icons/bi";


function ToastComponent({ id, message }) {

  const [Hover, setHover] = useState(false)
  const [delayHandler, setDelayHandler] = useState(null)

  const dispatch = useDispatch(selectToast)

  const closeToast = () => {
    dispatch(deleteToastID(id))
  }

  const handleMouseEnter = () => {
    clearTimeout(delayHandler)
  }

  const handleMouseLeave = () => {
    setDelayHandler(setTimeout(() => {
      dispatch(deleteToastID(id))

    }, 3000))
  }

  useEffect(() => {
    setDelayHandler(setTimeout(() => {
      dispatch(deleteToastID(id))
    }, 3000))
  }, [Hover])

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative opacity-75 hover:opacity-100 bg-red-300 w-80 border-4 border-red-500 shadow-lg rounded-lg p-5 ">
      <p className="text-center select-none">
        {message}
      </p>
      <button onClick={closeToast} className="absolute top-1 right-1">
        <BiX />
      </button>
    </div>
  )
}

export default ToastComponent
