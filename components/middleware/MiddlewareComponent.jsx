import React from 'react'
import { Provider } from 'react-redux'
import ToastNotification from "../notification/ToastNotification";
import { GlobalStore } from "../../redux/store";
import NextNprogress from 'nextjs-progressbar';

function MiddlewareComponent({children}) {
  return (
    <>
      <Provider store={  GlobalStore  }>
        <NextNprogress color="#EF4444" />
        <ToastNotification />
        {children}
      </Provider>
    </>
  )
}

export default MiddlewareComponent
