import React, {useState} from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginData, setEmailLogin, setPasswordLogin } from "../../redux/loginSlice";

function InputPass() {
  // Nyiapin aja untuk jaga-jaga kalau mau validasi
  const [Input, setInput] = useState("")

  const dispatch = useDispatch(selectLoginData)

  return (
    <>
      <div className="mt-6 flex rounded-lg shadow-lg">
        <div className="inline-flex items-center px-3 rounded-l-lg bg-red-100 text-gray-500 text-sm">
          <HiOutlineLockClosed />
        </div>
        <input
          type="password"
          className="p-2 h-10 focus:outline-none focus:border-indigo-500 placeholder-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-l-2 border-gray-300 bg-red-100"
          placeholder="Password"
          onChange={(e) => {
            dispatch(setPasswordLogin(e.target.value))
            setInput(e.target.value)
          }}
        />
      </div>
    </>
  );
}

export default InputPass;
