import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectToast, deleteToastID } from "../../redux/toastSlice";
import {
  XCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";

function ToastComponent({ id, message, type }) {
  const [Hover, setHover] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

  const dispatch = useDispatch(selectToast);

  const closeToast = () => {
    dispatch(deleteToastID(id));
  };

  const handleMouseEnter = () => {
    clearTimeout(delayHandler);
  };

  const handleMouseLeave = () => {
    setDelayHandler(
      setTimeout(() => {
        dispatch(deleteToastID(id));
      }, 5000)
    );
  };

  useEffect(() => {
    setDelayHandler(
      setTimeout(() => {
        dispatch(deleteToastID(id));
      }, 5000)
    );
  }, [Hover]);

 function RenderBox({ type, children }){
    return type == "warning" ? (
      <div
        onMouseEnter={handleMouseEnter}
        onClick={closeToast}
        onMouseLeave={handleMouseLeave}
        className={[
          "flex flex-row opacity-80 hover:opacity-100 bg-yellow-700 max-w-[388px] shadow-lg rounded-lg p-3",
        ]}
      >
        <div className="flex justify-center items-center mr-[10px]">
          <ExclamationCircleIcon width={20} color="white" />
        </div>
        {children}
      </div>
    ) : type == "success" ? (
      <div
        onMouseEnter={handleMouseEnter}
        onClick={closeToast}
        onMouseLeave={handleMouseLeave}
        className={[
          "flex flex-row opacity-80 hover:opacity-100 bg-green-700 max-w-[388px] shadow-lg rounded-lg p-3",
        ]}
      >
        <div className="flex justify-center items-center mr-[10px]">
          <CheckCircleIcon width={20} color="white" />
        </div>
        {children}
      </div>
    ) : (
      <div
        onMouseEnter={handleMouseEnter}
        onClick={closeToast}
        onMouseLeave={handleMouseLeave}
        className={[
          "flex flex-row opacity-80 hover:opacity-100 bg-red-700 max-w-[388px] shadow-lg rounded-lg p-3",
        ]}
      >
        <div className="flex justify-center items-center mr-[10px]">
          <XCircleIcon width={20} color="white" />
        </div>
        {children}
      </div>
    );
  };

  return (
    <RenderBox type={type}>
      <p className="select-none text-white">{message}</p>
    </RenderBox>
  );
}

export default ToastComponent;
