import React from 'react'
import { Provider } from 'react-redux'
import ToastNotification from "../notification/ToastNotification";
import { GlobalStore } from "../../redux/store";

function MiddlewareComponent({children}) {
  return (
    <>
      <Provider store={  GlobalStore  }>
        <ToastNotification />
        {children}
      </Provider>
    </>
  )
}

export default MiddlewareComponent
