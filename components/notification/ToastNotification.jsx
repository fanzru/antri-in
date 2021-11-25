import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectToast } from '../../redux/toastSlice';
import ToastComponent from './ToastComponent';

function ToastNotification() {

  const toastSelect = useSelector(selectToast)
  console.log(toastSelect)

  return (
    <>
    { (toastSelect.length == 0) ? <></> :
      <span className="grid gap-5 justify-center fixed top-16 z-10 w-screen h-0">
        {toastSelect.map((v, id) => {
          return <ToastComponent idx={id} message={v.message} id={v.id} />
        })}
      </span>
    }
    </>
  )
}

export default ToastNotification
