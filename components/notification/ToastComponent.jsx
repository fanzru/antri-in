import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectToast, deleteToastID } from '../../redux/toastSlice'
import {XCircleIcon} from '@heroicons/react/solid'

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
    }, 5000))
  }

  useEffect(() => {
    setDelayHandler(setTimeout(() => {
      dispatch(deleteToastID(id))
    }, 5000))
  }, [Hover])

  return (
    <div onMouseEnter={handleMouseEnter} onClick={closeToast} onMouseLeave={handleMouseLeave} className="flex flex-row opacity-80 hover:opacity-100 bg-red-700 max-w-[388px] shadow-lg rounded-lg p-3 ">
      <div className="flex justify-center items-center mr-[10px]">
        <XCircleIcon width={20} color="white" />
      </div>
      <p className="select-none text-white">
        {message}
      </p>
    </div>
  )
}

export default ToastComponent
