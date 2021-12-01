import React from 'react'
import { useSelector } from 'react-redux';
import { selectToast } from '../../redux/toastSlice';
import ToastComponent from './ToastComponent';

function ToastNotification() {

  const toastSelect = useSelector(selectToast)

  return (
    <>
    { (toastSelect.length == 0) ? <></> :
      <span className="grid gap-5 justify-center fixed top-16 z-10 w-screen h-0">
        {toastSelect.map((v, id) => {
          return <ToastComponent key={id} message={v.message} id={v.id} type={v.type} />
        })}
      </span>
    }
    </>
  )
}

export default ToastNotification
